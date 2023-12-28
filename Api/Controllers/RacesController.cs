namespace Formel1Api.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Formel1Api.Contexts;
using Formel1Api.Models;

[ApiController]
[Route("api/[controller]")]
public class RacesController : ControllerBase
{
    private readonly Formel1Context context;

    public RacesController(Formel1Context _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Race>>> Get()
    {
        try
        {
            List<Race> races = await context.Races.ToListAsync();
            if (races != null)
            {
                return Ok(races);
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

    [HttpGet]
    [Route("[action]/{grandPrix}")]
    public async Task<ActionResult<List<Race>>> GetGrandPrix(string grandPrix)
    {
        try
        {
            List<Race> races = await context.Races.Where(race => race.GrandPrix != null && race.GrandPrix.ToLower().Contains(grandPrix.ToLower())).ToListAsync();
            return Ok(races);
        }
        catch
        {
            return StatusCode(500);
        }
    }
}
