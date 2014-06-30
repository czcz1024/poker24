using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;


namespace ServerSide.Controllers
{
    //[EnableCors("*","*","*")]
    public class UserController : ApiController
    {
        [HttpGet,HttpPost,HttpOptions]
        public Guid Login(string username, string password)
        {
            //HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "*");
            if (username == "a" && password == "a")
            {
                return Guid.NewGuid();
            }
            return Guid.Empty;
        }
    }
}
