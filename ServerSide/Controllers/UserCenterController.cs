﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ServerSide.Controllers
{
    public class UserCenterController : Controller
    {
        // GET: UserCenter
        
        public ActionResult Index()
        {
            return Content("1");
        }
    }
}