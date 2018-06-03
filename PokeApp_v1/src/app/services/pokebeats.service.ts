import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";

@Injectable()
export class PokebeatsService
{
    private _selectedIndex : number = 0;

    constructor(private _http: HttpClient) { }

    getSongDescription(): Observable<ISongDescriptionRoot>{
        return this._http.get<ISongDescriptionRoot>("http://localhost:5000/api/v1/songs/");
    }

    setIndex(index : number)
    {
        this._selectedIndex = index;
    }

}

export interface ISongDescriptionRoot {
    id: number;
    title: string;
    date: string;
    length: string;
    artist: IArtist;
    artistId: number;
    source: ISource;
    sourceId: number;
    timespan: ITimespan;
    timespanId: number;
  }
  
export interface ITimespan {
    id: number;
    season: string;
    debutEpisode: string;
    finalEpisode: string;
  }
  
export interface ISource {
    id: number;
    directory: string;
    extension: string;
  }
  
export interface IArtist {
    id: number;
    name: string;
    songs: any[];
  }
