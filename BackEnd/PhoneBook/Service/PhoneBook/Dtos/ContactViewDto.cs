namespace PhoneBook.Service.PhoneBook.Dtos
{
    public class ContactViewDto
    {
       
        public long PhoneNumberId { get; set; }
        
        public string Name { get; set; }
        
        public string Phonenumber { get; set; }
        
        public string CountryExtension { get; set; }

        public string Company { get; set; }
    }
}
