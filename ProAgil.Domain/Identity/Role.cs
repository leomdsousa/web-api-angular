using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System;

namespace ProAgil.Domain.Identity
{
    public class Role : IdentityRole<int>
    {
        public List<UserRole> UserRoles { get; set; }
    }
}