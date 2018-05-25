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
      //this._svc.setIndex(this.pokemon.results.indexOf(p) + 1);
      var index = this.pokemon.results.indexOf(p);
      //console.log(this.pokemon.results.indexOf(p) + 1);
      
      var parser = document.createElement('a');

      /*Since the PokeDex ID is not accessible with 
      the current call, we will need to
      parse the PokeDex ID from the url*/

      parser.href= this.pokemon.results[index].url;      
      var temp = parser.pathname.replace(/\/$/, "");
      var dexID = parseInt(temp.substr(16,19));
      console.log(dexID);
      
      this._svc.setIndex(dexID);
    }

    next()
    {
      this._svc.setOffsetNext(this.pokemon.next);      
      this._svc.getPokemon().subscribe(result => this.pokemon = result);
    }

    previous()
    {
      if(this.pokemon.previous != null)
      {
      this._svc.setOffsetPrevious(this.pokemon.previous);
      }
      this._svc.getPokemon().subscribe(result => this.pokemon = result);
    }

}
