import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";

@Injectable()
export class PokedexService
{
    private _selectedIndex: number = null;  
    private _selectedPokemon: IPokemonDescriptionRoot = null;
    //private _selectedSprite: ISpriteRoot = null;
    private _typeImage1: String = null;
    private _typeImage2: String = null;
    private _offsetUrl: string = "http://pokeapi.salestock.net/api/v2/pokemon/";

    constructor(private _http: HttpClient) { }

    getPokemon(): Observable<IPokemonRoot>{
        return this._http.get<IPokemonRoot>(this._offsetUrl);
    } 

    getPokemonDescription(): Observable<IPokemonDescriptionRoot>{
        return this._http.get<IPokemonDescriptionRoot>("http://pokeapi.salestock.net/api/v2/pokemon/" + this._selectedIndex + "/");
    }

    /*getPokemonSprite(): Observable<ISpriteRoot>{
        return this._http.get<ISpriteRoot>("http://pokeapi.salestock.net/api/v2/pokemon-form/" + this._selectedIndex + "/");
    }*/

    setTypeImages()
    {
    if(this._selectedPokemon.types[1] != null)
    {
        switch(this._selectedPokemon.types[1].type.name)
        {
            case "normal":
            this._typeImage1 = "../../assets/images/typeImages/normal.jpg";
            break;
            case "fire":
            this._typeImage1 = "../../assets/images/typeImages/fire.jpg";
            break;
            case "water":
            this._typeImage1 = "../../assets/images/typeImages/water.jpg";
            break;
            case "electric":
            this._typeImage1 = "../../assets/images/typeImages/electric.jpg";
            break;
            case "grass":
            this._typeImage1 = "../../assets/images/typeImages/grass.jpg";
            break;
            case "ice":
            this._typeImage1 = "../../assets/images/typeImages/ice.jpg";
            break;
            case "fighting":
            this._typeImage1 = "../../assets/images/typeImages/fighting.jpg";
            break;
            case "poison":
            this._typeImage1 = "../../assets/images/typeImages/poison.jpg";
            break;
            case "ground":
            this._typeImage1 = "../../assets/images/typeImages/ground.jpg";
            break;
            case "flying":
            this._typeImage1 = "../../assets/images/typeImages/flying.jpg";
            break;
            case "psychic":
            this._typeImage1 = "../../assets/images/typeImages/psychic.jpg";
            break;
            case "bug":
            this._typeImage1 = "../../assets/images/typeImages/bug.jpg";
            break;
            case "rock":
            this._typeImage1 = "../../assets/images/typeImages/rock.jpg";
            break;
            case "ghost":
            this._typeImage1 = "../../assets/images/typeImages/ghost.jpg";
            break;
            case "dragon":
            this._typeImage1 = "../../assets/images/typeImages/dragon.jpg";
            break;
            case "dark":
            this._typeImage1 = "../../assets/images/typeImages/dark.jpg";
            break;
            case "steel":
            this._typeImage1 = "../../assets/images/typeImages/steel.jpg";
            break;
            case "fairy":
            this._typeImage1 = "../../assets/images/typeImages/fairy.jpg";
            break;
            
        }
    }

        
            switch(this._selectedPokemon.types[0].type.name)
            {
                case "normal":
                this._typeImage2 = "../../assets/images/typeImages/normal.jpg";
                break;
                case "fire":
                this._typeImage2 = "../../assets/images/typeImages/fire.jpg";
                break;
                case "water":
                this._typeImage2 = "../../assets/images/typeImages/water.jpg";
                break;
                case "electric":
                this._typeImage2 = "../../assets/images/typeImages/electric.jpg";
                break;
                case "grass":
                this._typeImage2 = "../../assets/images/typeImages/grass.jpg";
                break;
                case "ice":
                this._typeImage2 = "../../assets/images/typeImages/ice.jpg";
                break;
                case "fighting":
                this._typeImage2 = "../../assets/images/typeImages/fighting.jpg";
                break;
                case "poison":
                this._typeImage2 = "../../assets/images/typeImages/poison.jpg";
                break;
                case "ground":
                this._typeImage2 = "../../assets/images/typeImages/ground.jpg";
                break;
                case "flying":
                this._typeImage2 = "../../assets/images/typeImages/flying.jpg";
                break;
                case "psychic":
                this._typeImage2 = "../../assets/images/typeImages/psychic.jpg";
                break;
                case "bug":
                this._typeImage2 = "../../assets/images/typeImages/bug.jpg";
                break;
                case "rock":
                this._typeImage2 = "../../assets/images/typeImages/rock.jpg";
                break;
                case "ghost":
                this._typeImage2 = "../../assets/images/typeImages/ghost.jpg";
                break;
                case "dragon":
                this._typeImage2 = "../../assets/images/typeImages/dragon.jpg";
                break;
                case "dark":
                this._typeImage2 = "../../assets/images/typeImages/dark.jpg";
                break;
                case "steel":
                this._typeImage2 = "../../assets/images/typeImages/steel.jpg";
                break;
                case "fairy":
                this._typeImage2 = "../../assets/images/typeImages/fairy.jpg";
                break;

            
        }
    }

    setIndex(selectedIndex : number) {

        //Set on null
       // this._selectedSprite = null;
        this._selectedPokemon = null;
        this._typeImage1 = null;
        this._typeImage2 = null;

        //Check for current Pokemon
        this._selectedIndex = selectedIndex;
       // this.getPokemonSprite().subscribe(result => {
         //   if(this.getIndex() != null)
           // {
             //   this._selectedSprite = result;

                this.getPokemonDescription().subscribe(result => {
                    if(this.getIndex() != null)
                    {
                        this._selectedPokemon = result;   
                        this.setTypeImages();                                         
                    }          
                });
            }
       // });        
    //}

    getIndex()
    {
        return this._selectedIndex;
    }

    getOffset()
    {
        return this._offsetUrl;
    }

    setOffsetNext(offsetUrl : string)
    {
        this._offsetUrl = offsetUrl;
    }

    setOffsetPrevious(offsetUrl : string)
    {
        this._offsetUrl = offsetUrl;
    }
    
}

    export interface IResult {
        url: string;
        name: string;
    }

    export interface IPokemonRoot {
        count: number;
        previous?: any;
        results: IResult[];
        next: string;
    }

    //Pokemon Description 

    export interface IForm {
        url: string;
        name: string;
    }

    export interface IAbility2 {
        url: string;
        name: string;
    }

    export interface IAbility {
        slot: number;
        is_hidden: boolean;
        ability: IAbility2;
    }

    export interface IStat2 {
        url: string;
        name: string;
    }

    export interface IStat {
        stat: IStat2;
        effort: number;
        base_stat: number;
    }

    export interface IMoveLearnMethod {
        url: string;
        name: string;
    }

    export interface IVersionGroup {
        url: string;
        name: string;
    }

    export interface IVersionGroupDetail {
        move_learn_method: IMoveLearnMethod;
        level_learned_at: number;
        version_group: IVersionGroup;
    }

    export interface IMove2 {
        url: string;
        name: string;
    }

    export interface IMove {
        version_group_details: IVersionGroupDetail[];
        move: IMove2;
    }

    export interface ISprites {
        back_female?: any;
        back_shiny_female?: any;
        back_default: string;
        front_female?: any;
        front_shiny_female?: any;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
    }

    export interface ISpecies {
        url: string;
        name: string;
    }

    export interface IVersion {
        url: string;
        name: string;
    }

    export interface IGameIndice {
        version: IVersion;
        game_index: number;
    }

    export interface IType2 {
        url: string;
        name: string;
    }

    export interface IType {
        slot: number;
        type: IType2;
    }

    export interface IPokemonDescriptionRoot {
        forms: IForm[];
        abilities: IAbility[];
        stats: IStat[];
        name: string;
        weight: number;
        moves: IMove[];
        sprites: ISprites;
        held_items: any[];
        location_area_encounters: string;
        height: number;
        is_default: boolean;
        species: ISpecies;
        id: number;
        order: number;
        game_indices: IGameIndice[];
        base_experience: number;
        types: IType[];
    }



   /* //Pokemon Description

        export interface IAbility2 {
            name: string;
            url: string;
        }
    
        export interface IAbility {
            is_hidden: boolean;
            slot: number;
            ability: IAbility2;
        }
    
        export interface IForm {
            name: string;
            url: string;
        }
    
        export interface IVersion {
            name: string;
            url: string;
        }
    
        export interface IGameIndice {
            game_index: number;
            version: IVersion;
        }
    
        export interface IMove2 {
            name: string;
            url: string;
        }
    
        export interface IVersionGroup {
            name: string;
            url: string;
        }
    
        export interface IMoveLearnMethod {
            name: string;
            url: string;
        }
    
        export interface IVersionGroupDetail {
            level_learned_at: number;
            version_group: IVersionGroup;
            move_learn_method: IMoveLearnMethod;
        }
    
        export interface IMove {
            move: IMove2;
            version_group_details: IVersionGroupDetail[];
        }
    
        export interface ISpecies {
            name: string;
            url: string;
        }
    
        export interface IStat2 {
            name: string;
            url: string;
        }
    
        export interface IStat {
            base_stat: number;
            effort: number;
            stat: IStat2;
        }
    
        export interface IType2 {
            name: string;
            url: string;
        }
    
        export interface IType {
            slot: number;
            type: IType2;
        }
    
        export interface IPokemonDescriptionRoot {
            id: number;
            name: string;
            base_experience: number;
            height: number;
            is_default: boolean;
            order: number;
            weight: number;
            abilities: IAbility[];
            forms: IForm[];
            game_indices: IGameIndice[];
            held_items: any[];
            location_area_encounters: any[];
            moves: IMove[];
            species: ISpecies;
            stats: IStat[];
            types: IType[];
        }
    
    //Pokemon Sprite Image

        export interface ISprites {
            front_default: string;
            back_default: string;
            front_shiny: string;
            back_shiny: string;
        }
    
        export interface IVersionGroup {
            url: string;
            name: string;
        }
    
        export interface IPokemon {
            url: string;
            name: string;
        }
    
        export interface ISpriteRoot {
            is_battle_only: boolean;
            sprites: ISprites;
            version_group: IVersionGroup;
            form_order: number;
            is_mega: boolean;
            form_names: any[];
            id: number;
            is_default: boolean;
            names: any[];
            form_name: string;
            pokemon: IPokemon;
            order: number;
            name: string;
        }*/
    
    
    
    
    

