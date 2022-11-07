import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Chart } from 'src/app/Models/Chart/chart.model';
import { BaseService } from 'src/app/Shared/base-service.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService extends BaseService {


  constructor(http: HttpClient,
    toast: ToastrService,
    private router: Router) {
    super(http, toast);
  }

  public async GetAll(): Promise<Chart[]> {
    var Charts: Chart[] = [];
    this.ResponseObject =
      await this.GET("Report/GetAll");

    if (this.ResponseObject.isSuccessFul) {
      Charts = JSON.parse(this.ResponseObject.data);
    }
    console.log(Charts);
    return Charts;
  }
}
