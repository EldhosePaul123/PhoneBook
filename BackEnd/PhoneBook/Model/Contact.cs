using System.ComponentModel.DataAnnotations;

namespace PhoneBook.Model
{
    public class Contact
    {
        [Key]
        public long PhoneNumberId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Phonenumber { get; set; }
        [Required]
        public string CountryExtension { get; set; }
        [Required]
        public DateTime CreatedOn { get; set; }
        public string Company { get; set; }
    }
}
