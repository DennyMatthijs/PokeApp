using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;

[Route("api/v1/sources")]

public class SourcesController : Controller
{
    private readonly LibraryContext context;
    public SourcesController(LibraryContext context)
    {
        this.context = context;
    }

    // | Get full Library | 

    [HttpGet]
     public List<Source> GetSourceLibrary()
    {
        return context.Sources.ToList();
    }

    // | Get specific object |

    [Route("{id}")]
    [HttpGet]
    public IActionResult GetSource(int id)
    {
        var source = context.Sources
                                .Where(d => d.Id == id)
                                .Select(d => d);
                                //.Find(id);
        if(source == null)
        {
            return NotFound();
        }

        return Ok(source);
    }

    // | Add specific object |

    [HttpPost]

    public IActionResult CreateSource([FromBody] Source newSource)
    {
        context.Sources.Add(newSource);
        context.SaveChanges();
        return Created("", newSource);
    }

    // | Remove specific object |

    [Route("{id}")]
    [HttpDelete]

    public IActionResult DeleteSource(int id)
    {
        var source = context.Sources.Find(id);
        if(source == null)
        {
            //Dit altijd opvangen! 
            return NotFound();
        }

        context.Sources.Remove(source);
        context.SaveChanges();
        return NoContent();
    }


    // | Update specific item |

    [HttpPut]

    public IActionResult UpdateSource([FromBody] Source updateSource)
    {
        var orgSource = context.Sources.Find(updateSource.Id);
        if(orgSource == null)
        {
            return NotFound();
        }

        orgSource.Directory = updateSource.Directory;
        orgSource.Extension = updateSource.Extension;
        
        context.SaveChanges();
        return Ok(orgSource);
    }    
}