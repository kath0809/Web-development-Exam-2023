using Microsoft.EntityFrameworkCore;
using Formel1Api.Contexts;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<Formel1Context>
(options => options.UseSqlite("Data Source=Databases/Formel1Db.db"));

builder.Services.AddCors(
    options => {
        options.AddPolicy("AllowAll",
        policies => policies
        .AllowAnyMethod()
        .AllowAnyOrigin()
        .AllowAnyHeader()
        );
    }
);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseStaticFiles();
app.UseCors("AllowAll");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
