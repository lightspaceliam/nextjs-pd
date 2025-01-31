using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Entities.DbContexts
{
    public class NextDbContextFactory : IDesignTimeDbContextFactory<NextDbContext>
    {
        public NextDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<NextDbContext>();

            optionsBuilder.UseSqlServer("Server=(local);Database=NextDbContext;Integrated Security=True;MultipleActiveResultSets=False;Encrypt=False");

            return new NextDbContext(optionsBuilder.Options);
        }
    }
}
