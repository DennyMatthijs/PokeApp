using Microsoft.EntityFrameworkCore;

namespace Model{

    public class LibraryContext : DbContext
    {
        public LibraryContext(DbContextOptions<LibraryContext> options): base(options)
        {

        }

        public DbSet<Song> Songs {get; set;}
        public DbSet<Artist> Artists {get; set;}
        public DbSet<Source> Sources {get; set;}
        public DbSet<Timespan> Timespans {get; set;}
    }
}