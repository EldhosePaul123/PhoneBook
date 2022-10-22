using AutoMapper;
using AutoMapper.Internal.Mappers;
using PhoneBook.Model;
using PhoneBook.Service.PhoneBook.Dtos;

namespace PhoneBook.Service.PhoneBook
{
    public class ContactService : IContactService
    {
        private readonly DataContext _dbContext;
        private readonly IMapper _mapper;
        public ContactService(DataContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }
        public bool CreateOrEditContact(ContactCreateEditDto inputdata)
        {
            using (var transaction = _dbContext.Database.BeginTransaction())
            {
                try
                {
                    if(inputdata != null && inputdata.PhoneNumberId == 0)
                    {
                        _dbContext.ContactMaster.Add(_mapper.Map<Contact>(inputdata));
                    }
                    else if (inputdata != null && inputdata.PhoneNumberId > 0)
                    {
                        _dbContext.ContactMaster.Update(_mapper.Map<Contact>(inputdata));
                    }
                    _dbContext.SaveChanges();
                    transaction.Commit();
                    return true;
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    return false;
                }
            }
        }

        public bool DeleteContact(long conatctId=0)
        {
            if (conatctId > 0)
            {
                using (var transaction = _dbContext.Database.BeginTransaction())
                {
                    try
                    {
                        var contactObj = _dbContext.ContactMaster?.FirstOrDefault(x => x.PhoneNumberId == conatctId);
                        if (contactObj != null)
                        {
                            _dbContext.ContactMaster?.Remove(contactObj);
                        }
                        _dbContext.SaveChanges();
                        transaction.Commit();
                        return true;
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        return false;
                    }
                }
            }
            else
            {
                return false;
            }
           
        }

        public List<ContactViewDto> getContactList(long conatctId = 0)
        {
            try
            {
                return _dbContext.ContactMaster
                        .Where(it => it.PhoneNumberId == conatctId || conatctId == 0)
                        .Select(it => new ContactViewDto
                        {
                            PhoneNumberId = it.PhoneNumberId,
                            Name = it.Name,
                            Phonenumber = it.Phonenumber,
                            CountryExtension = it.CountryExtension,
                            Company = it.Company
                        }).ToList();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

       
    }
}
