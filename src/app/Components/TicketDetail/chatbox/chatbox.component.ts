import { identifierName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Create } from 'src/app/Models/TicketDetail/create.model';
import { TicketDetail } from 'src/app/Models/TicketDetail/ticket-detail.model';
import { TicketDetailService } from 'src/app/Services/ticket-detail.service';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})

export class ChatboxComponent implements OnInit {

  private _ticketid: string = "";
  public get ticketid(): string {
    return this._ticketid;
  }
  @Input()
  public set ticketid(v: string) {
    this._ticketid = v;
    this.resetData();
  }
  public Details: TicketDetail[] = [];


  public create: Create = new Create();

  constructor(private service: TicketService,
    private detailService: TicketDetailService) { }

  ngOnInit(): void {
  }

  public async resetData() {
    this.Details = await this.service.GetTicketDetail(this.ticketid);
    this.create.description = "";
  }

  public async DoCreate(event: any) {
    var response =
      await this.detailService.CreateResponse(this.create, event);
    if (response.isSuccessFul) {
      this.resetData();
    }


  }

}