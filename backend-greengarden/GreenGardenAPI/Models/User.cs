using System.Text.Json.Serialization;

namespace GreenGardenAPI.Models
{
    public class User
    {
        [JsonIgnore]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Cpf { get; set; }
        public string Email { get; set; }
        public bool IsActive { get; set; } = true;
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
