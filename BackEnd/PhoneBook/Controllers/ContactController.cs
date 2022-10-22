using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PhoneBook.Service.PhoneBook;
using PhoneBook.Service.PhoneBook.Dtos;

namespace PhoneBook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IContactService _IContactService;

        public ContactController(IContactService contactService)
        {
            _IContactService = contactService;
        }

        [HttpGet]
        public async Task<IActionResult> GetContact(long contactId=0)
        {
            return Ok(_IContactService.getContactList(contactId));
        }
        [HttpPost]
        public async Task<IActionResult> CreateOrEditConatact(ContactCreateEditDto obj)
        {
            return Ok(_IContactService.CreateOrEditContact(obj));

        }
        [HttpDelete]
        public async Task<IActionResult> DeleteContact(long contactId =0)
        {
            return Ok(_IContactService.DeleteContact(contactId));

        }
    }
}
