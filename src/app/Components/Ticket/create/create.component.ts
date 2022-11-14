import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Models/Department/department.model';
import { Priority } from 'src/app/Models/Priority/priority.model';
import { Service } from 'src/app/Models/Service/service.model';
import { Create } from 'src/app/Models/Ticket/create.model';
import { TicketType } from 'src/app/Models/TicketType/ticket-type.model';
import { DepartmentService } from 'src/app/Services/department.service';
import { PriorityService } from 'src/app/Services/priority.service';
import { ServiceService } from 'src/app/Services/service.service';
import { TicketTypeService } from 'src/app/Services/ticket-type.service';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  protected model: Create = new Create();

  protected Departments: Department[] = [];
  protected Priorities: Priority[] = [];
  protected Services: Service[] = [];
  protected TicketTypes: TicketType[] = [];


  public SelectedTicket: string = '';

  constructor(private service: TicketService,
    private depservice: DepartmentService,
    private serservice: ServiceService,
    private prioservice: PriorityService,
    private ttypeservice: TicketTypeService) { }

  ngOnInit(): void {
    this.SetAll();
  }

  protected async SetAll() {

    this.Departments = await this.depservice.GetAll();
    this.Services = await this.serservice.GetAll();
    this.Priorities = await this.prioservice.GetAll();
    this.TicketTypes = await this.ttypeservice.GetAll();
  }

  public file: any;
  public onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.file = event.target.files[0];
    }
  }

  protected DoCreate(form: any) {
    this.model.isActive = true;

    this.service.Create(form);

  }
  protected SelectTicket(input: string) {
    this.SelectedTicket = input;
  }
}