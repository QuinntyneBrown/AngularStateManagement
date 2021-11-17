using AngularStateManagement.Api.Interfaces;
using AngularStateManagement.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularStateManagement.Api.Data
{
    public class AngularStateManagementDbContext: DbContext, IAngularStateManagementDbContext
    {
        public DbSet<ToDo> ToDos { get; private set; }
        public AngularStateManagementDbContext(DbContextOptions options)
            :base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(AngularStateManagementDbContext).Assembly);
        }
    }
}
