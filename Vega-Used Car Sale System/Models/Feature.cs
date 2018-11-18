using System.ComponentModel.DataAnnotations;

namespace Vega_Used_Car_Sale_System.Models
{
    public class Feature
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(255)]
        public string Name { get; set; }
    }
}