using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;

[Route("api/v1/artists")]

public class ArtistsController : Controller
{
    private readonly LibraryContext context;
    public ArtistsController(LibraryContext context)
    {
        this.context = context;
    }

    // | Get full Library | 

    [HttpGet]
     public List<Artist> GetArtistLibrary()
    {
        return context.Artists.Include(d => d.Songs).ThenInclude(s => s.Source)
                            .Include(d => d.Songs).ThenInclude(t => t.Timespan).ToList();
    }

    // | Get specific object |

    [Route("{id}")]
    [HttpGet]
    public IActionResult GetArtist(int id)
    {
        var artist = context.Artists.Include(d => d.Songs).ThenInclude(s => s.Source)
                                .Include(d => d.Songs).ThenInclude(t => t.Timespan)
                                .Where(d => d.Id == id)
                                .Select(d => d);
                                //.Find(id);
        if(artist == null)
        {
            return NotFound();
        }

        return Ok(artist);
    }

    // | Add specific object |

    [HttpPost]

    public IActionResult CreateArtist([FromBody] Artist newArtist)
    {
        context.Artists.Add(newArtist);
        context.SaveChanges();
        return Created("", newArtist);
    }

    // | Remove specific object |

    [Route("{id}")]
    [HttpDelete]

    public IActionResult DeleteArtist(int id)
    {
        var artist = context.Artists.Find(id);
        if(artist == null)
        {
            //Dit altijd opvangen! 
            return NotFound();
        }

        context.Artists.Remove(artist);
        context.SaveChanges();
        return NoContent();
    }


    // | Update specific item |

    [HttpPut]

    public IActionResult UpdateArtist([FromBody] Artist updateArtist)
    {
        var orgArtist = context.Artists.Find(updateArtist.Id);
        if(orgArtist == null)
        {
            return NotFound();
        }

        orgArtist.Name = updateArtist.Name;
        
        context.SaveChanges();
        return Ok(orgArtist);
    }    
}