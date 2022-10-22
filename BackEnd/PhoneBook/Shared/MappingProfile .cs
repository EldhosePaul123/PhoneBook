using AutoMapper;
using PhoneBook.Model;
using PhoneBook.Service.PhoneBook.Dtos;

namespace PhoneBook.Shared
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            this.CreateMap<ContactViewDto, Contact>().ReverseMap();
            this.CreateMap<ContactCreateEditDto, Contact>().ReverseMap();
        }

    }
}
