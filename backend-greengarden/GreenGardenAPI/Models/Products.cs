using System.Text.Json.Serialization;

namespace GreenGardenAPI.Models
{
    public class Products
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? ImageURL { get; set; }
        public int? Quantity { get; set; }
        public DateTime? ExpiratioDate { get; set; }
    }
}
