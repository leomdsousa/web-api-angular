using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System;

namespace ProAgil.Domain.Identity
{
    public class UserRole : IdentityUserRole<int>
    {
        public User User { get; set; }
        public Role Role { get; set; }
    }
}