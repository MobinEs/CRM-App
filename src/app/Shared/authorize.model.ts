import { Injectable } from "@angular/core";

import {
    ActivatedRouteSnapshot, CanActivate, CanActivateChild,
    CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree
} from "@angular/router";

import { Observable } from "rxjs";
import { AccessLevel } from "../Models/Enums/access-level.enum";
import { AuthenticateStatus } from "./authenticate-status.model";

@Injectable({
    providedIn: 'root'
})

export class Authorize implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {

    constructor(private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let url: string = state.url;
        return this.AuthorizeRequest(next, url);
    }
    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.canActivate(next, state);
    }
    canDeactivate(
        component: unknown,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return true;
    }
    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }

    AuthorizeRequest(route: ActivatedRouteSnapshot, url: any): boolean {

        if (route.data['accessType'] === AccessLevel.Public) {
            return true;
        }

        if (AuthenticateStatus.IsAuthenticated()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;

    }
}


