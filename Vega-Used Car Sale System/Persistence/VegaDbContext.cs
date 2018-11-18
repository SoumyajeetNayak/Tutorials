using Microsoft.EntityFrameworkCore;
using Vega_Used_Car_Sale_System.Models;

namespace Vega_Used_Car_Sale_System.Persistence
{
    public class VegaDbContext: DbContext
    {
        public VegaDbContext(DbContextOptions<VegaDbContext> options)
        :base(options)
        {
            
        }
        public DbSet<Make> Makes { get; set; }
        public DbSet<Feature> Features {get; set;}
    }
}