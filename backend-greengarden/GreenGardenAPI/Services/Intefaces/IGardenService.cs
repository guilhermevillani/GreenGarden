using GreenGardenAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace GreenGardenAPI.Services.Intefaces
{
  public interface IGardenService
  {
    Garden GetGardenByName(string gardenName);
    Task<Garden> RegisterNewGarden(Garden garden);
    Garden RegisterProduct(string gardenName, Products product);

  }
}
