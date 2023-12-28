namespace Formel1Api.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Formel1Api.Contexts;
using Formel1Api.Models;

[ApiController]
[Route("api/[controller]")]
public class DriversController : ControllerBase
{
    private readonly Formel1Context context;

    public DriversController(Formel1Context _context)
    {
        context = _context;
    }

// Get all drivers
    [HttpGet]
    public async Task<ActionResult<List<Driver>>> Get()
    {
        try
        {
            List<Driver> drivers = await context.Drivers.ToListAsync();
            if (drivers != null)
            {
                return Ok(drivers);
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }

// Get driver by id
    [HttpGet("{id}")]
    public async Task<ActionResult<Driver>> Get(int id)
    {
        try
        {
            Driver? driver = await context.Drivers.FindAsync(id);
            if (driver != null)
            {
                return Ok(driver);
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }

// Get driver by name
    [HttpGet]
    [Route("[action]/{name}")]
    public async Task<ActionResult<List<Driver>>> GetDriverByName(string name)
    {
        try
        {
            List<Driver> drivers = await context.Drivers.Where(driver => driver.Name != null && driver.Name.ToLower().Contains(name.ToLower())).ToListAsync();
            return Ok(drivers);
        }
        catch
        {
            return StatusCode(500);
        }
    }

}
 
