import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/Models/User/register.model';
import { AccountService } from 'src/app/Services/account.service';
import { AuthenticateStatus } from 'src/app/Shared/authenticate-status.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public register: Register = new Register()
  constructor(private service: AccountService,
    private router: Router) { }

  ngOnInit(): void {
    if (AuthenticateStatus.IsAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  public DoRegister() {

    this.service.Register(this.register);

  }
}
