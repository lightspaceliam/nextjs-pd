using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Entities.Abstract;
using Microsoft.EntityFrameworkCore;

namespace Entities.DbContexts
{
    public class NextDbContext : DbContext
    {
        public NextDbContext(DbContextOptions<NextDbContext> options)
        : base(options) { }

        public NextDbContext() { }

        public DbSet<Payment> Payments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) 
        {
            #region Generic defaults.

            var entityTypes = Assembly.GetExecutingAssembly().GetTypes()
            .Where(type => type.IsClass
                           && !type.IsAbstract
                           && type.IsSubclassOf(typeof(EntityBase)))
            .ToList();

            foreach (var entityType in entityTypes)
            {
                var idProperty = entityType.GetProperty("Id");

                if (idProperty == null) continue;

                if (idProperty.PropertyType == typeof(Guid?))
                {
                    modelBuilder.Entity(entityType).Property("Id").HasDefaultValueSql("NEWID()");
                }

                //  TODO: add temporal config in here so we don't need to set it each time.
            }

            #endregion


            modelBuilder.Entity<Payment>(entity =>
            {
                entity.HasIndex(e => e.CardHolderName);
                
                entity.ToTable(nameof(Payment), e => e.IsTemporal());
            });
        }
    }
}
