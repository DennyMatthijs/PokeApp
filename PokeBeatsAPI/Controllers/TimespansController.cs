using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;

[Route("api/v1/timespans")]

public class TimespansController : Controller
{
    private readonly LibraryContext context;
    public TimespansController(LibraryContext context)
    {
        this.context = context;
    }

    // | Get full Library | 

    [HttpGet]
     public List<Timespan> GetTimespanLibrary()
    {
        return context.Timespans.ToList();
    }

    // | Get specific object |

    [Route("{id}")]
    [HttpGet]
    public IActionResult GetTimespan(int id)
    {
        var timespan = context.Timespans
                                .Where(d => d.Id == id)
                                .Select(d => d);
                                //.Find(id);
        if(timespan == null)
        {
            return NotFound();
        }

        return Ok(timespan);
    }

    // | Add specific object |

    [HttpPost]

    public IActionResult CreateTimespan([FromBody] Timespan newTimespan)
    {
        context.Timespans.Add(newTimespan);
        context.SaveChanges();
        return Created("", newTimespan);
    }

    // | Remove specific object |

    [Route("{id}")]
    [HttpDelete]

    public IActionResult DeleteTimespan(int id)
    {
        var timespan = context.Timespans.Find(id);
        if(timespan == null)
        {
            //Dit altijd opvangen! 
            return NotFound();
        }

        context.Timespans.Remove(timespan);
        context.SaveChanges();
        return NoContent();
    }


    // | Update specific item |

    [HttpPut]

    public IActionResult UpdateTimespan([FromBody] Timespan updateTimespan)
    {
        var orgTimespan = context.Timespans.Find(updateTimespan.Id);
        if(orgTimespan == null)
        {
            return NotFound();
        }

        orgTimespan.Season = updateTimespan.Season;
        orgTimespan.DebutEpisode = updateTimespan.DebutEpisode;
        orgTimespan.FinalEpisode = updateTimespan.FinalEpisode;
        
        context.SaveChanges();
        return Ok(orgTimespan);
    }    
}