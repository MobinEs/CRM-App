import { Router } from "@angular/router";
import { Buffer } from "buffer";
import { Authenticated } from "../Models/User/authenticated.model";
import { Token } from "../Models/User/token.model";

export class AuthenticateStatus {

    public static GetAuthenticated(): Authenticated {
        var auth: Authenticated = new Authenticated();

        var str = sessionStorage.getItem(Token.TokenName);

        if (str != null) {

            var parts = str.split('.');
            var payload = parts[1];

            var json = this.Base64ToString(payload);

            auth = JSON.parse(json) as Authenticated;
        }
        return auth;
    }
    public static IsAuthenticated(): boolean {
        var auth: Authenticated = new Authenticated();

        var str = sessionStorage.getItem(Token.TokenName);

        if (str == null) {
            return false;
        }
        var parts = str.split('.');
        if (parts.length < 3) {
            return false
        }

        return true;
    }
    public static LogOut(): void {
        sessionStorage.clear();  
    }

    public static GetToken(): string {
        return sessionStorage.getItem(Token.TokenName) ?? "";
    }

    public static SetToken(value: string) {
        sessionStorage.setItem(Token.TokenName, value);
    }

    public static Base64ToString(value: string): string {
        return Buffer.from(value, 'base64').toString();
    }

}
