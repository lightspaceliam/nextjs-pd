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

            //  Windows.
            optionsBuilder.UseSqlServer("Server=(local);Database=NextDbContext;Integrated Security=True;MultipleActiveResultSets=False;Encrypt=False");

            //  Docker - you will need to add, name and set your own: container and credentials.
            optionsBuilder.UseSqlServer(
              "Server=tcp:localhost,1433;Initial Catalog=NextDbContext;Persist Security Info=False;User ID=SA;Password=Local@DevPa55word;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=True;Connection Timeout=30;");

            return new NextDbContext(optionsBuilder.Options);
        }
    }
}
