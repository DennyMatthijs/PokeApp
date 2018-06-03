using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model {

    public class Song
    {
        public int Id{get; set;}
        public string Title {get; set;}
        public string Date {get; set;}
        public string Length {get; set;}
        public Artist Artist {get; set;}
        public int ArtistId {get; set;}
        public Source Source {get; set;}
        public int SourceId {get; set;}
        public Timespan Timespan {get; set;}
        public int TimespanId {get; set;}
    }
}
    
