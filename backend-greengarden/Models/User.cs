using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend_greengarden.Models
{
  public class User
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Cpf { get; set; }
    public string Email { get; set; }
    public int IsActive { get; set; }

  }
}