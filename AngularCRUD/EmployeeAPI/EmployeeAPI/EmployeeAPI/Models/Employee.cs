﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeAPI.Models {
  public class Employee {
    public int EmployeeID { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string EmpCode { get; set; }
    public string Position { get; set; }
    public string Office { get; set; }
  }
}