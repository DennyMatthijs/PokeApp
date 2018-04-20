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

    getPokemon()
    {
     //this.pokemon.results[]
    }
  
    ngOnInit() {     
      //console.log(this.pokemon.results);
      this._svc.getPokemon().subscribe(result => this.pokemon = result);
    }
  
    setIndex(p: IResult)
    {
      this._svc.setIndex(this.pokemon.results.indexOf(p) + 1);
      console.log(this.pokemon.results.indexOf(p) + 1);
    }

    next()
    {
      //console.log("| next accessed |");
      this._svc.setOffsetNext(this.pokemon.next);      
      //console.log("offset: " + this._svc.getOffset());
      this._svc.getPokemon().subscribe(result => this.pokemon = result);
      //console.log(this.pokemon);
    }

    previous()
    {
      //console.log("| previous accessed |");
      if(this.pokemon.previous != null)
      {
      this._svc.setOffsetPrevious(this.pokemon.previous);
      }
      //console.log("offset: " + this._svc.getOffset());
      this._svc.getPokemon().subscribe(result => this.pokemon = result);
      //console.log(this.pokemon.results);
    }

}
