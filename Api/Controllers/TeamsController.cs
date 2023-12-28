namespace Formel1Api.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Formel1Api.Contexts;
using Formel1Api.Models;


[ApiController]
[Route("api/[controller]")]
public class TeamsController : ControllerBase
{
    private readonly Formel1Context context;

    public TeamsController(Formel1Context _context)
    {
        context = _context;
    }


    [HttpGet]
    public async Task<ActionResult<List<Team>>> Get()
    {
        try
        {
            List<Team> teams = await context.Teams.ToListAsync();
            if (teams != null)
            {
                return Ok(teams);
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

    [HttpGet("{id}")]
    public async Task<ActionResult<Team>> Get(int id)
    {
        try
        {
            Team? team = await context.Teams.FindAsync(id);
            if (team != null)
            {
                return Ok(team);
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

    //  Team? betyr at den kan være null. 
    //
    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(int id)
    {
        try
        {
            Team? team = await context.Teams.FindAsync(id);
            if (team != null)
            {
                context.Teams.Remove(team);
                await context.SaveChangesAsync();
                return NoContent();
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

    [HttpPost]
    public async Task<ActionResult<Team>> Post(Team newTeam)
    {
        try
        {
            context.Teams.Add(newTeam);
            await context.SaveChangesAsync();
            return CreatedAtAction("Get", new { id = newTeam.Id }, newTeam);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPut]
    public async Task<IActionResult> Put(Team updatedTeam)
    {
        try
        {
            context.Entry(updatedTeam).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();
        }
        catch
        {
            return StatusCode(500);
        }
    }
}