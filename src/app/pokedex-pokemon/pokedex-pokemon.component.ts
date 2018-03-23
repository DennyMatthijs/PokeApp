import { Component, OnInit } from '@angular/core';
import { IResult, PokedexService, IPokemonRoot} from '../services/pokedex.service';

@Component({
  selector: 'app-pokedex-pokemon',
  templateUrl: './pokedex-pokemon.component.html',
  styleUrls: ['./pokedex-pokemon.component.scss']
})
export class PokedexPokemonComponent implements OnInit {

    pokemon : IPokemonRoot

    constructor(private _svc : PokedexService) { }
  
    ngOnInit() {
        this._svc.getPokemon().subscribe(result => this.pokemon = result);
    }
  
    setIndex(p: IResult)
    {
      this._svc.setIndex(this.pokemon.results.indexOf(p) + 1);
      console.log(this.pokemon.results.indexOf(p) + 1);
    }

}
