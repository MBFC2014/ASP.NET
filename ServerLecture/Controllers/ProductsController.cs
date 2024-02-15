using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServerLecture.Data;
using ServerLecture.Models;

namespace ServerLecture.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProductsController(ApplicationDbContext context){
            _context = context;
        }

        // Seed the database
        [HttpGet("seed")]
        public async Task<IActionResult> Seed() {
            var products = new List<Product> {
                new Product {
                    Name = "Laptop",
                    Description = "A high performance laptop.",
                    Price = 1200.00m,
                    IsAvailable = true
                },
                new Product {
                    Name = "Smartphone",
                    Description = "Latest model smartphone with high-end specs.",
                    Price = 999.99m,
                    IsAvailable = true
                },
                new Product {
                    Name = "Headphones",
                    Description = "Noise cancelling headphones.",
                    Price = 299.99m,
                    IsAvailable = true
                },
                new Product {
                    Name = "Tablet",
                    Description = "Portable and powerful tablet for on-the-go work.",
                    Price = 600.00m,
                    IsAvailable = true
                },
                new Product {
                    Name = "E-Reader",
                    Description = "Lightweight e-reader for your digital library.",
                    Price = 150.00m,
                    IsAvailable = true
                },
                new Product {
                    Name = "Smart Watch",
                    Description = "Keep track of your health and notifications.",
                    Price = 250.00m,
                    IsAvailable = true
                },
                new Product {
                    Name = "Wireless Charger",
                    Description = "Convenient charging for all your devices.",
                    Price = 50.00m,
                    IsAvailable = true
                },
                new Product {
                    Name = "Bluetooth Speaker",
                    Description = "High-quality sound wherever you go.",
                    Price = 120.00m,
                    IsAvailable = true
                },
                new Product {
                    Name = "Camera",
                    Description = "Capture your moments with stunning clarity.",
                    Price = 500.00m,
                    IsAvailable = true
                },
                new Product {
                    Name = "Gaming Console",
                    Description = "The latest gaming console for hours of entertainment.",
                    Price = 499.99m,
                    IsAvailable = true
                },
                new Product {
                    Name = "Virtual Reality Headset",
                    Description = "Immersive virtual reality experience.",
                    Price = 350.00m,
                    IsAvailable = true
                }

            };

            await _context.Products.AddRangeAsync(products);
            await _context.SaveChangesAsync();

            return Ok("Database seeded");
        }
    
        // Get all products
        [HttpGet("")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts() {
            
            return Ok(await _context.Products.ToListAsync());
        }

        // Delete a product
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id){
            //get the product with the given id
            Product product = await _context.Products.FindAsync(id);

            if(product == null){
                return NotFound();
            }
            //if found, remove it from the database 
            _context.Products.Remove(product);
            //save changes
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // Get a single product
        // [HttpGet("{id}")]
        
    }
}
