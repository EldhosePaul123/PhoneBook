global using PhoneBook.Data;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using PhoneBook.Service.PhoneBook;
using AutoMapper;
using AutoMapper.Internal.Mappers;
using PhoneBook.Shared;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddDbContext<DataContext>(options =>
//{
//    options.UseSqlServer(builder.Configuration.GetConnectionString("ConnectionStrings"));
//}
//);
var sqlConBuilder = new SqlConnectionStringBuilder();
sqlConBuilder.ConnectionString = builder.Configuration.GetConnectionString("DbConnection");
builder.Services.AddDbContext<DataContext>(opt => opt.UseSqlServer(sqlConBuilder.ConnectionString));

builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IContactService, ContactService>();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
//services cors
builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));
var mappingConfig = new MapperConfiguration(mc =>
{
    mc.AddProfile(new MappingProfile());
});

IMapper mapper = mappingConfig.CreateMapper();
builder.Services.AddSingleton(mapper);
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(x => x
    .AllowAnyMethod()
    .AllowAnyHeader()
    .SetIsOriginAllowed(origin => true) // allow any origin 
    .AllowCredentials());
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
