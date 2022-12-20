using GreenGardenAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace GreenGardenAPI.Services.Intefaces
{
    public interface IGardenService
    {
        IEnumerable<Garden> GetAllGardens();
        Garden GetGardenByName(string gardenName);
        IEnumerable<Products> GetProducts(string gardenName);
        Garden RegisterNewGarden(Garden garden);
        Garden RegisterProduct(string gardenName,Products product);
        Garden UpdateGardenByName(Garden garden);
    }
}
