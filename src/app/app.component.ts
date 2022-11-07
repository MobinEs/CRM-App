import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authenticated } from './Models/User/authenticated.model';
import { AuthenticateStatus } from './Shared/authenticate-status.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'CRM-APP';
  constructor(private router: Router) { }
  ngOnInit(): void {
  }


  public get IsAuthenticated(): boolean {
    return AuthenticateStatus.IsAuthenticated();
  }
  public get Authenticated(): Authenticated {    
    return AuthenticateStatus.GetAuthenticated();
  }
  public LogOut(): void {
    AuthenticateStatus.LogOut();
    this.router.navigate(['/login']);
  }

}