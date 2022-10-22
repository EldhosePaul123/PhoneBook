using PhoneBook.Service.PhoneBook.Dtos;

namespace PhoneBook.Service.PhoneBook
{
    public interface IContactService
    {
        /// <summary>
        /// contract for getcontactlist
        /// </summary>
        /// <param name="conatctId"></param>
        /// <returns></returns>
        List<ContactViewDto> getContactList(long conatctId);
        /// <summary>
        /// contract for create or edit contact
        /// </summary>
        /// <param name="inputdata"></param>
        /// <returns></returns>
        bool CreateOrEditContact(ContactCreateEditDto inputdata);
        /// <summary>
        /// contract for delete contact
        /// </summary>
        /// <param name="conatctId"></param>
        /// <returns></returns>
        bool DeleteContact(long conatctId = 0);
    }
}
