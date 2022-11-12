import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule, ToastrService } from 'ngx-toastr';
import { RegisterComponent } from './Components/register/register.component';
import { LowerCaseUrlSerializer } from './Shared/lower-case-url-serializer';
import { UrlSerializer } from '@angular/router';
import { IndexComponent } from './Components/Ticket/index/index.component';
import { CreateComponent } from './Components/Ticket/create/create.component';
import { ChatboxComponent } from './Components/TicketDetail/chatbox/chatbox.component';
import { ReferComponent } from './Components/Ticket/refer/refer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    PageNotFoundComponent,
    RegisterComponent,
    IndexComponent,
    CreateComponent,
    ChatboxComponent,
    ReferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    EditorModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgbModule,
  ],
  providers: [
    { provide: ToastrService, useClass: ToastrService },
    { provide: UrlSerializer, useClass: LowerCaseUrlSerializer },
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

