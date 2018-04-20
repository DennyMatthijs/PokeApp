import { Component, OnInit } from '@angular/core';
import { IResult, PokedexService, IPokemonDescriptionRoot} from '../services/pokedex.service';


@Component({
  selector: 'app-pokedex-description',
  templateUrl: './pokedex-description.component.html',
  styleUrls: ['./pokedex-description.component.scss']
})
export class PokedexDescriptionComponent implements OnInit {

  constructor(private _svc : PokedexService) { }


  ngOnInit() {
  
      
  }

}
