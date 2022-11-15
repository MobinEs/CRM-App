import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { buffer, firstValueFrom, Observable } from 'rxjs';
import { Response } from '../Models/Response/response.model';
import { Authenticated } from '../Models/User/authenticated.model';
import { Token } from '../Models/User/token.model';
import { AuthenticateStatus } from './authenticate-status.model';

// @Injectable({
//   providedIn: 'root'
// })

export abstract class BaseService {

  protected ResponseObject: Response = new Response();

  //private BaseUrl: string = "https://localhost:7104/api/v1/";
  //private BaseUrl: string = "https://crmserver.taklearning.ir/api/v1/";
  //private ApiKey: string = "FD5607F6-9CCE-476C-9091-060A0B0F661B";

  private BaseUrl: string = "http://localhost/api/v1/";
  private ApiKey: string = "7153002d-3e4e-4b9b-acbb-2478af444b1f";
  constructor(
    private http: HttpClient,
    protected toast: ToastrService) { }


  private GetHeaders(): HttpHeaders {
    var token = AuthenticateStatus.GetToken();
    var head = {
      'CultureLcid': "1065",
      'Api-Key': this.ApiKey,
      'Authorization': 'Bearer ' + token
    };
    return new HttpHeaders(head);
  }

  private NotifyAll(response: Response) {

    if (response.errors.length != 0) {
      response.errors.forEach(element => {
        this.toast.error(element.message);
      });

      return;
    }

    if (response.warnings.length != 0) {
      response.warnings.forEach(element => {
        this.toast.warning(element.message);
      });

      return;
    }

    if (response.information.length != 0) {
      response.information.forEach(element => {
        this.toast.info(element.message);
      });

      return;
    }
  }
  private NotifyErrors(response: Response) {

    if (response.errors.length != 0) {
      response.errors.forEach(element => {
        this.toast.error(element.message);
      });

      return;
    }

    if (response.warnings.length != 0) {
      response.warnings.forEach(element => {
        this.toast.warning(element.message);
      });

      return;
    }
  }

  protected async GET(url: string): Promise<Response> {

    var response: Response = new Response();

    await firstValueFrom(
      this.http.get<Response>(
        this.BaseUrl + url,
        { headers: this.GetHeaders() }))

      .then(result => {
        response = result;
      });

    this.NotifyErrors(response);


    return response;

  }

  protected async Post(url: string, obj: any): Promise<Response> {
    var response: Response = new Response();

    await firstValueFrom(
      this.http.post<Response>(
        this.BaseUrl + url,
        obj,
        { headers: this.GetHeaders() })
    )
      .then(result => {
        response = result;
      });

    this.NotifyAll(response);


    return response;

  }

  protected async PostByFile(url: string, file: any): Promise<Response> {
    var response: Response = new Response();
    var form: FormData = new FormData(file);

    await firstValueFrom(
      this.http.post<Response>(
        this.BaseUrl + url,
        form,
        { headers: this.GetHeaders() })
    )
      .then(result => {
        response = result;
      });

    this.NotifyAll(response);


    return response;

  }

  protected async Put(url: string, obj: any): Promise<Response> {

    var response: Response = new Response();

    await firstValueFrom(
      this.http.put<Response>(
        this.BaseUrl + url,
        obj,
        { headers: this.GetHeaders() })
    )
      .then(result => {
        response = result;
      });;


    this.NotifyAll(response);

    return response;
  }

  protected async Delete(url: string): Promise<Response> {

    var response: Response = new Response();

    await firstValueFrom(
      this.http.delete<Response>(
        this.BaseUrl + url,
        { headers: this.GetHeaders() }))

      .then(result => {
        response = result;
      });

    this.NotifyAll(response);

    return response;
  }
}