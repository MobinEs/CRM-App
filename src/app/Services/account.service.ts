import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BaseService } from '../Shared/base-service.service';
import { Authenticated } from '../Models/User/authenticated.model';
import { Login } from '../Models/User/login.model';
import { ToastrService } from 'ngx-toastr';
import { Token } from '../Models/User/token.model';
import { Router } from '@angular/router';
import { Register } from '../Models/User/register.model';
import { AuthenticateStatus } from '../Shared/authenticate-status.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService {

  constructor(http: HttpClient,
    toast: ToastrService,
    private router: Router) {
    super(http, toast);
  }

  public async Login(loginviewmodel: Login) {

    this.ResponseObject =
      await this.Post("Account/Login", loginviewmodel);


    if (this.ResponseObject.isSuccessFul) {

      var token = JSON.parse(this.ResponseObject.data) as Token;


      AuthenticateStatus.SetToken(token.token);

      this.router.navigate(['/dashboard']);
    }
  }

  public async Register(viewmodel: Register) {

    this.ResponseObject =
      await this.Post("Account/Register", viewmodel);

    if (this.ResponseObject.isSuccessFul) {

      this.router.navigate(['/login']);
    }
  }
}