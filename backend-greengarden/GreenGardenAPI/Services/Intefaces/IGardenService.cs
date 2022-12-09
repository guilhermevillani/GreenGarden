using GreenGardenAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace GreenGardenAPI.Services.Intefaces
{
    public interface IGardenService
    {
        Garden GetGardenByName(string gardenName);
        Garden RegisterNewGarden(Garden garden);
        Garden RegisterProduct(string gardenName,Products product);

    }
}
