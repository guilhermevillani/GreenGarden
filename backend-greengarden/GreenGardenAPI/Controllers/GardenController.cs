﻿using GreenGardenAPI.Models;
using GreenGardenAPI.Services;
using GreenGardenAPI.Services.Intefaces;
using Microsoft.AspNetCore.Mvc;

namespace GreenGardenAPI.Controllers
{
    public class GardenController : Controller
    {
        private readonly IGardenService _gardenService;

        public GardenController(IGardenService gardenService)
        {
            _gardenService = gardenService;
        }

        [HttpPost("Register")]
        public ActionResult Register([FromBody] Garden garden)
        {
            var result = _gardenService.RegisterNewGarden(garden);

            if (result is null)
            {
                return BadRequest("Error while creating garden");
            }

            return Ok(result);
        }

        [HttpPost("/{gardenName}/Products")]
        public ActionResult RegisterProduct(string gardenName, [FromBody] Products product)
        {
            var result = _gardenService.RegisterProduct(gardenName, product);

            if (result is null)
            {
                return BadRequest("Error while adding product");
            }

            return Ok(result);
        }

        [HttpGet("/{gardenName}")]
        public ActionResult GetGardenByName(string gardenName)
        {
            var result = _gardenService.GetGardenByName(gardenName);

            if (result is null)
            {
                return BadRequest($"Garden {gardenName} Not Found");
            }

            return Ok(result);
        }
    }
}