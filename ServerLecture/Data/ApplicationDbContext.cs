using Microsoft.EntityFrameworkCore;
using ServerLecture.Models;

namespace ServerLecture.Data;

public class ApplicationDbContext: DbContext {
    public DbSet<Product> Products { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite("Data Source=serverlecture.db");
}