﻿using Microsoft.EntityFrameworkCore;
using PhoneBook.Model;

namespace PhoneBook.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<Contact> ContactMaster { get; set; }
    }
}
