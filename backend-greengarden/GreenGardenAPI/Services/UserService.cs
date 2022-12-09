using GreenGardenAPI.Data;
using GreenGardenAPI.Models;
using GreenGardenAPI.Services.Intefaces;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata.Ecma335;
using System.Text;

namespace GreenGardenAPI.Services
{
    public class UserService : IUserService
    {
        private static string Key = "adef@@kfxcbv";
        private readonly DataContext _context;

        public UserService(DataContext context)
        {
            _context = context;

        }

        public async Task<User> RegisterUserAsync(User user)
        {
            user.Password = EncryptPassword(user.Password);

            _context.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User> LoginUserAsync(User user)
        {
            var userOnDb = await _context.Users.FirstOrDefaultAsync(u => u.Email.Equals(user.Email));
            if (userOnDb != null)
            {
                var passwprd = DecryptPassword(userOnDb.Password);
                if (user.Password.Equals(passwprd)) 
                {
                    return userOnDb;
                }
            }
            return null;
        }    

        public List<User> GetAll()
        {
           var userOnDb = _context.Users.ToList();
            return userOnDb;
        }


        private string EncryptPassword (string password)
        {
            password = password + Key;
            var passwordByte = Encoding.UTF8.GetBytes(password);
            return Convert.ToBase64String(passwordByte);
        }

        private string DecryptPassword(string base64)
        {
            var base64Encode = Convert.FromBase64String(base64);
            var result = Encoding.UTF8.GetString(base64Encode);
            result = result.Substring(0, result.Length - Key.Length);
            
            return result;
        }
    }
}
