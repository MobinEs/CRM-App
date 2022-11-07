import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/User/login.model';
import { AccountService } from 'src/app/Services/account.service';
import { AuthenticateStatus } from 'src/app/Shared/authenticate-status.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: Login = new Login();
  constructor(private service: AccountService,
    private router: Router) { }

  ngOnInit(): void {
    if (AuthenticateStatus.IsAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  DoLogin() {
    this.service.Login(this.login);

  }

}
