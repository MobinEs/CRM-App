import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Department } from '../Models/Department/department.model';
import { Service } from '../Models/Service/service.model';
import { BaseService } from '../Shared/base-service.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends BaseService {


  constructor(http: HttpClient, toast: ToastrService,
    private router: Router) {

    super(http, toast);
  }

  public async GetAll(): Promise<Department[]> {
    var Departmets: Department[] = []

    this.ResponseObject = await this.GET('Department/GetAll');

    if (this.ResponseObject.isSuccessFul) {
      Departmets = JSON.parse(this.ResponseObject.data);
    }

    return Departmets;
  }

}
