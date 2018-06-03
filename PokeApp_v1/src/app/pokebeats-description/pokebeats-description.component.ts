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
  
}