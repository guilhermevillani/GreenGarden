using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using backend_greengarden.Models;
using System.Data;

namespace backend_greengarden.Controllers
{
  [RoutePrefix("api/Login")]
  public class LoginController : ApiController
  {

    SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);
    SqlCommand cmd = null;
    SqlDataAdapter dataAdapter = null;

    [HttpPost]
    [Route("Registration")]
    public string Registration(User user)
    {

      string message = string.Empty;

      try
      {
        cmd = new SqlCommand("USER_REGISTRATION", connection);
        cmd.CommandType = CommandType.StoredProcedure;
        cmd.Parameters.AddWithValue("@Name", user.Name);
        cmd.Parameters.AddWithValue("@Cpf", user.Cpf);
        cmd.Parameters.AddWithValue("@IsActive", user.IsActive);

        connection.Open();

        int i = cmd.ExecuteNonQuery();
        connection.Close();

        if (i > 0)
        {
          message = "Sucesso";
        }
        else
        {
          message = "Erro";
        }
      }
      catch (Exception ex)
      {
        message = ex.Message;
      }

      return message;
    }

    [HttpPost]
    [Route("login")]
    public string Login(User user)
    {
      string message = string.Empty;

      try
      {
        dataAdapter = new SqlDataAdapter("USER_LOGIN", connection);
        dataAdapter.SelectCommand.CommandType = CommandType.StoredProcedure;
        dataAdapter.SelectCommand.Parameters.AddWithValue("@Name", user.Name);
        dataAdapter.SelectCommand.Parameters.AddWithValue("@Cpf", user.Cpf);

        DataTable dataTable = new DataTable();
        dataAdapter.Fill(dataTable);

        if(dataTable?.Rows.Count > 0)
        {
          message = "Usuário logado";
        }
        else
        {
          message = "Usuário inválido. Realize seu cadastro para continuar";
        }
      }
      catch (Exception ex)
      {
        message = ex.Message;
      }

      return message;
    }

  }
}
