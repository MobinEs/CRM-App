import { Component, OnInit } from '@angular/core';
import { Chart } from 'src/app/Models/Chart/chart.model';
import { ChartService } from 'src/app/Services/Report/chart.service';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public Charts: Chart[] = [];
  constructor(private service: ChartService) { }

  ngOnInit(): void {
    this.GetAll()

  }

  public async GetAll() {
    this.Charts = await this.service.GetAll();
  }

}
