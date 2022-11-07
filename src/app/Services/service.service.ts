import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Service } from '../Models/Service/service.model';
import { BaseService } from '../Shared/base-service.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService extends BaseService {

  constructor(http: HttpClient, toast: ToastrService,
    private router: Router) {

    super(http, toast);
  }

  public async GetAll(): Promise<Service[]> {
    var Services: Service[] = []

    this.ResponseObject = await this.GET('Service/GetAll');

    if (this.ResponseObject.isSuccessFul) {
      Services = JSON.parse(this.ResponseObject.data);
    }

    return Services;
  }
}