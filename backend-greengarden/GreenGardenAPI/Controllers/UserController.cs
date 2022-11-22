using GreenGardenAPI.Models;
using GreenGardenAPI.Services;
using GreenGardenAPI.Services.Intefaces;
using Microsoft.AspNetCore.Mvc;

namespace GreenGardenAPI.Controllers
{
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("Register")]
        public async Task<ActionResult> RegisterAsync([FromBody] User user)
        {
            var result = await _userService.RegisterUserAsync(user);

            return Ok(result);
        }

        [HttpPost("Login")]
        public async Task<ActionResult> LoginAsync([FromBody] User user)
        {
            var result = await _userService.LoginUserAsync(user);
            if(!result)
            {
                return BadRequest("Senha incorreta!!");
            }

            return Ok(result);
        }
    }
}
