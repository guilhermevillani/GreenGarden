using GreenGardenAPI.Models;

namespace GreenGardenAPI.Services.Intefaces
{
    public interface IUserService
    {
        Task<User> RegisterUserAsync(User user);

        Task<User> LoginUserAsync(User user);

        List<User> GetAll();
    }
}
