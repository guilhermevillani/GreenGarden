using GreenGardenAPI.Data;
using GreenGardenAPI.Models;
using GreenGardenAPI.Services.Intefaces;
using Microsoft.EntityFrameworkCore;

namespace GreenGardenAPI.Services
{
    public class GardenService :IGardenService
    {
        private readonly DataContext _context;

        public GardenService(DataContext context)
        {
            _context = context;

        }

        public Garden GetGardenByName(string gardenName)
        {
            var gardenOnDb = _context.Gardens
                                      .Include(g => g.Products)
                                      .Include(g => g.Adress)
                                      .Include(g => g.Admins)
                                      .FirstOrDefault(g => g.Name.ToLower().Equals(gardenName.ToLower()));
            return gardenOnDb;
        }

        public Garden RegisterNewGarden(Garden garden)
        {           
            _context.Add(garden);
            _context.SaveChangesAsync();
            return garden;
        }

        public Garden RegisterProduct(string gardenName, Products product)
        {
            var gardenFromDb = GetGardenByName(gardenName);
            gardenFromDb.Products.Add(product);

            _context.Update(gardenFromDb);
            _context.SaveChangesAsync();

            return gardenFromDb;
        }
    }
}
