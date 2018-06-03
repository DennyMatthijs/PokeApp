using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;

[Route("api/v1/songs")]

public class SongsController : Controller
{
    private readonly LibraryContext context;
    public SongsController(LibraryContext context)
    {
        this.context = context;
    }

    // | Get full Library | 

    /*[HttpGet]
     public List<Song> GetSongLibrary()
    {
        return context.Songs.Include(d => d.Artist).Include(d => d.Source).Include(d => d.Timespan).ToList();
    }*/

    // | Get specific object |

    [Route("{id}")]
    [HttpGet]
    public IActionResult GetSong(int id)
    {
        var song = context.Songs.Include(d => d.Artist).Include(d => d.Source).Include(d => d.Timespan)
                                .Where(d => d.Id == id)
                                .Select(d => d);
                                //.Find(id);
        if(song == null)
        {
            return NotFound();
        }

        return Ok(song);
    }

    // | Add specific object |

    [HttpPost]

    public IActionResult CreateSong([FromBody] Song newSong)
    { 
        context.Songs.Add(newSong);
        context.SaveChanges();
        return Created("", newSong);
    }

    // | Remove specific object |

    [Route("{id}")]
    [HttpDelete]

    public IActionResult DeleteSong(int id)
    {
        var song = context.Songs.Find(id);
        if(song == null)
        {
            //Dit altijd opvangen! 
            return NotFound();
        }

        context.Songs.Remove(song);
        context.SaveChanges();
        return NoContent();
    }


    // | Update specific item |

    [HttpPut]

    public IActionResult UpdateSong([FromBody] Song updateSong)
    {
        var orgSong = context.Songs.Find(updateSong.Id);
        if(orgSong == null)
        {
            return NotFound();
        }

        orgSong.Title = updateSong.Title;
        orgSong.Date = updateSong.Date;
        orgSong.Length = updateSong.Length;

        context.SaveChanges();
        return Ok(orgSong);
    }

    // | Get specific object within object | [Artist]

    [Route("{id}/artist")]
    [HttpGet]
    
    public IActionResult GetArtist(int id)
    {
        var artist = context.Songs.Include(d => d.Artist)
                                .Where(d => d.Id == id)
                                .Select(d => d.Artist);

        if(artist == null)
        {
            //Dit altijd opvangen! 
            return NotFound();
        }
        
        context.SaveChanges();
        return Ok(artist);
    }

    // | Get specific object within object | [Sources]

    [Route("{id}/source")]
    [HttpGet]
    
    public IActionResult GetSources(int id)
    {
        var source = context.Songs.Include(d => d.Source)
                                .Where(d => d.Id == id)
                                .Select(d => d.Source);

        if(source == null)
        {
            //Dit altijd opvangen! 
            return NotFound();
        }
        
        context.SaveChanges();
        return Ok(source);
    }

    // | Get specific object within object | [Timespans]

    [Route("{id}/timespan")]
    [HttpGet]
    
    public IActionResult GetTimespans(int id)
    {
        var timespan = context.Songs.Include(d => d.Timespan)
                                .Where(d => d.Id == id)
                                .Select(d => d.Timespan);

        if(timespan == null)
        {
            //Dit altijd opvangen! 
            return NotFound();
        }
        
        context.SaveChanges();
        return Ok(timespan);
    }

    [HttpGet]
    public List<Song> GetAllSongsWith(string artist, string title, int? page, string sort, int length = 3, string dir = "asc")
    {
        IQueryable<Song> query = context.Songs;

        if(!string.IsNullOrWhiteSpace(artist))        
            query = query.Where(d => d.Artist.Name == artist);
        
        if(!string.IsNullOrWhiteSpace(title))
            query = query.Where(d => d.Title == title);

        if(!string.IsNullOrWhiteSpace(sort))
        {
            switch(sort)
            {
                case "title":
                    if(dir == "asc")
                        query = query.OrderBy(d => d.Title);
                    else if(dir == "desc")
                        query = query.OrderByDescending(d => d.Title);
                break;
               
                case "artist":
                    if(dir == "asc")
                        query = query.OrderBy(d => d.Artist.Name);
                    else if(dir == "desc")
                        query = query.OrderByDescending(d => d.Artist.Name);
                break;
            }
        }

        if(page.HasValue)
            query = query.Skip(page.Value * length);
        query = query.Take(length);

        return query.Include(d => d.Artist).Include(d => d.Source).Include(d => d.Timespan).ToList();
    }
}