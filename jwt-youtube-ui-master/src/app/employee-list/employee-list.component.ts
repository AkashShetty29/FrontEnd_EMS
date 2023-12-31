import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees !: Employee[];

  constructor(private userService : UserService)
  {

  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees()
  {
    this.userService.getEmployeeList().subscribe(
      (data) => {
        console.log(data);
        this.employees = data;
    },
    (error)=>{
      console.log(error);
    }
    );
  }

}
