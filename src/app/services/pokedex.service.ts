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

    constructor(private _http: HttpClient) { }

    getPokemon(): Observable<IPokemonRoot>{
        return this._http.get<IPokemonRoot>("http://pokeapi.salestock.net/api/v2/pokemon/");
    } 

    getPokemonDescription(): Observable<IPokemonDescriptionRoot>{
        return this._http.get<IPokemonDescriptionRoot>("http://pokeapi.salestock.net/api/v2/pokemon/" + this._selectedIndex);
    }

    setIndex(selectedIndex : number) {
        this._selectedIndex = selectedIndex;
        this.getPokemonDescription().subscribe(result => {
            if(this.getIndex() != null)
            {
                this._selectedPokemon = result               
            }
        });
    }

    getIndex()
    {
        return this._selectedIndex;
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
    
    
    

