import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.sass']
})
export class EmployeeDetailComponent implements OnInit {
  public employees =[];
  public errorMsg: string;
  constructor( private emps : EmployeeService) { }

  ngOnInit(): void {
    this.emps.getEmployees().subscribe(
      data=>this.employees = data,
      error => {
        this.errorMsg = error.message;
        console.log("**",error.message);
      });
  }

}
