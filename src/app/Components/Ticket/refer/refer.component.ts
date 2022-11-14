import { Component, Input, OnInit } from '@angular/core';
import { Department } from 'src/app/Models/Department/department.model';
import { Refer } from 'src/app/Models/Ticket/refer.model';
import { User } from 'src/app/Models/User/user.model';
import { DepartmentService } from 'src/app/Services/department.service';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-refer',
  templateUrl: './refer.component.html',
  styleUrls: ['./refer.component.css']
})
export class ReferComponent implements OnInit {

  public model: Refer = new Refer();
  public departments: Department[] = [];
  public users: User[] = [];

  @Input()
  public set ticketId(v: string) {
    this.model.ticketId = v;
  }

  constructor(private service: TicketService,
    private depService: DepartmentService) { }

  ngOnInit(): void {
    this.GetDeps();
  }

  protected async GetUserByDep() {
    this.users = await this.depService
      .GetUserByDep(this.model.departmentId);
  }

  protected async GetDeps() {
    this.departments = await this.depService.GetAll();
  }



  protected Refer() {
    if (this.model.receiverId == '0') {
      this.model.receiverId = null;
    }
    console.log(this.model);
    this.service.Refer(this.model);
  }
}