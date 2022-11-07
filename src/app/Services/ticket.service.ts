import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Create } from '../Models/Ticket/create.model';
import { GetData } from '../Models/Ticket/get-data.model';
import { TicketDetail } from '../Models/TicketDetail/ticket-detail.model';
import { BaseService } from '../Shared/base-service.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService extends BaseService {

  constructor(http: HttpClient, toast: ToastrService) {
    super(http, toast);
  }

  public async GetAll(): Promise<GetData[]> {
    var tickets: GetData[] = [];
    this.ResponseObject =
      await this.GET("Ticket/GetEmployeeTickets");

    if (this.ResponseObject.isSuccessFul) {
      tickets = JSON.parse(this.ResponseObject.data);
    }
    return tickets;
  }

  public async GetMine(): Promise<GetData[]> {
    var tickets: GetData[] = [];
    this.ResponseObject =
      await this.GET("Ticket/GetUserTickets");

    if (this.ResponseObject.isSuccessFul) {
      tickets = JSON.parse(this.ResponseObject.data);
    }
    return tickets;
  }

  public async GetTicketDetail(id: string): Promise<TicketDetail[]> {
    var ticketdetails: TicketDetail[] = [];
    this.ResponseObject =
      await this.GET("TicketDetail/Get?ticketId=" + id);

    if (this.ResponseObject.isSuccessFul) {
      ticketdetails = JSON.parse(this.ResponseObject.data);
    }
    console.log(ticketdetails);
    return ticketdetails;
  }



  public async Create(model: Create, file: any) {

    this.ResponseObject =
      await this.PostByFile("Ticket/Create", file);


    if (this.ResponseObject.isSuccessFul) {
    }
  }
}
