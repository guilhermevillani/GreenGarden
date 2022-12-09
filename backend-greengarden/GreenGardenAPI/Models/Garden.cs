using System.Text.Json;
using System.Text.Json.Serialization;

namespace GreenGardenAPI.Models
{
    public class Garden
    {
        [JsonIgnore]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Phone { get; set; }
        public string Objective { get; set; }
        public Adress Adress { get; set; }
        public string BannerURL { get; set; }
        public string ImageURL { get; set; }
        public string LogoURL { get; set; }
        public List<Products> Products { get; set; } 
        public List<User> Admins { get; set; }
    }
}
