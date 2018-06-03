import { Component, OnInit } from '@angular/core';
import { PokebeatsService, ISongDescriptionRoot } from '../services/pokebeats.service';

@Component({
    selector: 'app-pokebeats-description',
    templateUrl: './pokebeats-description.component.html',
    styleUrls: ['./pokebeats-description.component.scss']
})
export class PokebeatsDescriptionComponent implements OnInit {
  
    songs : ISongDescriptionRoot
    selectedIndex : Number = 0;

    constructor(private _svc : PokebeatsService) { }
    
  
    ngOnInit() {
    this._svc.getSongDescription().subscribe(result => 
        {
            this.songs = result;
            console.log(result);
        });
        
    }

    postRequest()
    {
        //This post request won't be shown on the UI, due to the timespan I had to work with. It will show up in the
        //database however! I hope that I can at least show that I know how to handle a post request. 
        
        var body = {
            name: (<HTMLInputElement>document.getElementById("artistName")).value
        };
        this._svc.postAuthorRequest(body);
    }
  
}