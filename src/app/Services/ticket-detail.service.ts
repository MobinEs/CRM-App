import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Response } from '../Models/Response/response.model';
import { Create } from '../Models/TicketDetail/create.model';
import { BaseService } from '../Shared/base-service.service';

@Injectable({
  providedIn: 'root'
})
export class TicketDetailService extends BaseService {

  constructor(http: HttpClient, toast: ToastrService) {
    super(http, toast);
  }



  public async CreateResponse(model: Create, file: any): Promise<Response> {
    return await this.PostByFile("TicketDetail/Create", file);
  }
}
