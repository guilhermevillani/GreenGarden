using GreenGardenAPI.Data;
using GreenGardenAPI.Models;
using GreenGardenAPI.Services.Intefaces;
using Microsoft.EntityFrameworkCore;

namespace GreenGardenAPI.Services
{
  public class GardenService : IGardenService
  {
    private readonly DataContext _context;

    public GardenService(DataContext context)
    {
      _context = context;

    }

    public IEnumerable<Garden> GetAllGardens()
    {
      var gardensOnDb = _context.Gardens
                                .Include(g => g.Products);
      return gardensOnDb;
    }

    public Garden GetGardenByName(string gardenName)
    {
      var gardenOnDb = _context.Gardens
                                .Include(g => g.Products)
                                .FirstOrDefault(g => g.Name.ToLower().Equals(gardenName.ToLower()));
      return gardenOnDb;
    }

    public Garden GetGardenByUserId(int userId)
    {
      var gardenOnDb = _context.Gardens
                                .FirstOrDefault(g => g.UserId.Equals(userId));
      return gardenOnDb;
    }

    public IEnumerable<Products> GetProducts(string gardenName)
    {
      var garden = GetGardenByName(gardenName);
      var products = garden.Products;

      return products;
    }

    public Garden RegisterNewGarden(Garden garden)
    {
      _context.Add(garden);
      _context.SaveChanges();
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

    public Garden UpdateGardenByName(Garden garden)
    {
      _context.Update(garden);
      _context.SaveChanges();
      return garden;
    }
  }
}
