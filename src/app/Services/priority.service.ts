import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Priority } from '../Models/Priority/priority.model';
import { BaseService } from '../Shared/base-service.service';

@Injectable({
  providedIn: 'root'
})
export class PriorityService extends BaseService {

  constructor(http: HttpClient, toast: ToastrService,
    private router: Router) {

    super(http, toast);
  }

  public async GetAll(): Promise<Priority[]> {
    var Priorities: Priority[] = [];
    this.ResponseObject = await this.GET('Priority/GetAll');

    if (this.ResponseObject.isSuccessFul) {
      Priorities = JSON.parse(this.ResponseObject.data);
    }

    return Priorities;
  }
}