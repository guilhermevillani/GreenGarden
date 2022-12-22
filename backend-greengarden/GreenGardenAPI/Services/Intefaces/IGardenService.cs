using GreenGardenAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace GreenGardenAPI.Services.Intefaces
{
    public interface IGardenService
    {
        IEnumerable<Garden> GetAllGardens();
        Garden GetGardenByName(string gardenName);
        Garden GetGardenByUserId(int userId);
        IEnumerable<Products> GetProducts(string gardenName);
        //IEnumerable<Products> GetProductsByGardenId(int gardenId);
        Garden RegisterNewGarden(Garden garden);
        Garden RegisterProduct(string gardenName,Products product);
        Garden UpdateGardenByName(Garden garden);
    }
}
