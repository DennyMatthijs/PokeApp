import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";

@Injectable()
export class AuthenticationService
{
    private displayName: string = "Guest";

    setDisplayName(displayName: string)
    {
        this.displayName = displayName;
    }

    getDisplayName()
    {
        return this.displayName;
    }
}