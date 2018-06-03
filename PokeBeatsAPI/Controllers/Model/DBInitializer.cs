using System.Linq;

namespace Model{

public class DBInitializer{

    public static void Initialize(LibraryContext context)
    {
        //Create db when it's not yet created
        context.Database.EnsureCreated();
        
        //Are there any songs?
        if(!context.Songs.Any())
        {
            //Create new Artist
            var a = new Artist()
            {
               Name = "Jason Paige"
            };

            var a2 = new Artist()
            {
                Name = "Russell Velázquez"
            };    

            var a3 = new Artist()
            {
                Name = "PJ Lequerica"
            };     

            //Create new Source
            var src = new Source()
            {
                Directory = "../assets/audio/pokemon_theme",
                Extension = ".mp3"
            }; 

            var src2 = new Source()
            {
                Directory = "../assets/audio/pokemon_theme",
                Extension = ".mp3"
            };

            var src3 = new Source()
            {
                Directory = "../assets/audio/pokemon_theme",
                Extension = ".mp3"
            };

            //Create new Timespan
            var ts = new Timespan()
            {
                Season = "Pokémon: Indigo League",
                DebutEpisode = "EP001 Pokémon - I Choose You!",
                FinalEpisode = "EP080 Friends to the End"
            };

            var ts2 = new Timespan()
            {
                Season = "Pokémon: Adventures in the Orange Islands",
                DebutEpisode = "EP081 Pallet Party Panic",
                FinalEpisode = "EP116 The Rivalry Revival"
            };

            var ts3 = new Timespan()
            {
                Season = "Pokémon: The Johto Journeys",
                DebutEpisode = "EP117 Don't Touch That 'dile",
                FinalEpisode = "EP157 The Fortune Hunters"
            };
           
            //Create new Song
            var s = new Song()
            {
                Title = "Pokémon Theme",
                Date = "1998-1999",
                Length = "3:15",
                Artist = a,
                Source = src,   
                Timespan = ts
            };

            var s2 = new Song()
            {
                Title = "Pokémon World",
                Date = "2000",
                Length = "3:15",
                Artist = a2,
                Source = src2,
                Timespan = ts2
            };

            var s3 = new Song()
            {
                Title = "Pokémon Johto",
                Date = "Unknown",
                Length = "2:50",
                Artist = a3,
                Source = src3,
                Timespan = ts3
            };

            //Add everything to their respective collection
            context.Songs.Add(s);
            context.Artists.Add(a);
            context.Sources.Add(src);
            context.Timespans.Add(ts);

            context.Songs.Add(s2);
            context.Artists.Add(a2);
            context.Sources.Add(src2);
            context.Timespans.Add(ts2);

            context.Songs.Add(s3);
            context.Artists.Add(a3);
            context.Sources.Add(src3);
            context.Timespans.Add(ts3);

            //Save all changes to the DB
            context.SaveChanges();
        }
    }

  }
}