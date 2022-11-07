import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TicketType } from '../Models/TicketType/ticket-type.model';
import { BaseService } from '../Shared/base-service.service';

@Injectable({
  providedIn: 'root'
})
export class TicketTypeService extends BaseService {

  constructor(http: HttpClient, toast: ToastrService,
    private router: Router) {

    super(http, toast);
  }

  public async GetAll(): Promise<TicketType[]> {
    var TicketTypes: TicketType[] = [];

    this.ResponseObject = await this.GET('TicketType/GetAll');
    if (this.ResponseObject.isSuccessFul) {
      TicketTypes = JSON.parse(this.ResponseObject.data);
    }

    return TicketTypes;
  }
}