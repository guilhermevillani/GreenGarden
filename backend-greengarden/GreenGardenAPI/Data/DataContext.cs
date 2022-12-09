using GreenGardenAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace GreenGardenAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        

        public DbSet<User> Users { get; set; }

        public DbSet<Garden> Gardens { get; set; }

        public DbSet<Products> Products{ get; set; }

    }
}
