namespace Formel1Api.Contexts;

using Microsoft.EntityFrameworkCore;
using Formel1Api.Models;

public class Formel1Context : DbContext
{
    public Formel1Context(DbContextOptions<Formel1Context> options) : base(options){}
    public DbSet<Driver> Drivers { get; set; }
    public DbSet<Team> Teams { get; set; }
    public DbSet<Race> Races { get; set; }
}
