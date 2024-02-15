using System.ComponentModel.DataAnnotations;

namespace ServerLecture.Models;

public class Product {
    [Key]
    public int ProductId { get; set; }

    [Required]
    public string Name { get; set; }

    public string Description { get; set; }

    [Required]
    public decimal Price { get; set; }

    public bool IsAvailable { get; set; }
}