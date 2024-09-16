using Microsoft.EntityFrameworkCore;

namespace InterviewTest.Model
{
    public class SqlDbcontext : DbContext
    {
        public SqlDbcontext(DbContextOptions<SqlDbcontext> options)
            : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>(entity =>
            {
                entity.ToTable("Employees");

                entity.Property(e => e.Name);

                entity.Property(e => e.Value);
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}

