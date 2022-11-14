import { Component, OnInit } from '@angular/core';
import { GetData } from 'src/app/Models/Ticket/get-data.model';
import { TicketService } from 'src/app/Services/ticket.service';
import { ChatboxComponent } from '../../TicketDetail/chatbox/chatbox.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  protected tickets: GetData[] = [];
  protected myTickets: GetData[] = [];
  constructor(private service: TicketService) { }

  public SelectedTicket: string = "";

  ngOnInit(): void {
    this.GetTickets();
    this.GetMyTickets();
  }


  protected async GetTickets() {
    this.tickets = await this.service.GetAll();
    console.log(this.tickets);
  }
  protected async GetMyTickets() {
    this.myTickets = await this.service.GetMine();
  }

  protected Selected(ticketId: string) {
    this.SelectedTicket = ticketId;
  }
}