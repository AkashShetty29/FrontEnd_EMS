import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { AdminServiceService } from '../_services/admin-service.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  employees !: Employee[];

  constructor(private userService : UserService)
  {

  }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees()
  {
    this.userService.getEmployeeList().subscribe(data => {
      this.employees = data;
    })
  }

}
