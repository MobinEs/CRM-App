import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  constructor(private service: TicketService,
    private modalService: NgbModal) { }

  public SelectedTicket: string = "";

  ngOnInit(): void {
    this.GetTickets();
    this.GetMyTickets();
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }


  protected async GetTickets() {
    this.tickets = await this.service.GetAll();
  }
  protected async GetMyTickets() {
    this.myTickets = await this.service.GetMine();
  }

  protected Selected(ticketId: string) {
    this.SelectedTicket = ticketId;
  }
}