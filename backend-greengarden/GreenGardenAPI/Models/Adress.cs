﻿using System.Text.Json.Serialization;

namespace GreenGardenAPI.Models
{
    public class Adress
    {
        [JsonIgnore]
        public int Id { get; set; }
        public string? Street { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public string? PostalCode { get; set; }
        public string? Country { get; set; }        
    }
}
