import { Component, OnInit } from '@angular/core';
import {EmployeeService } from '../employee.service'

@Component({
  selector: 'app-employ-list',
  templateUrl: './employ-list.component.html',
  styleUrls: ['./employ-list.component.sass']
})
export class EmployListComponent implements OnInit {
  public employees = [];
  public errorMessage;
  constructor(private  emps : EmployeeService ) {}

  ngOnInit(): void {
    this.emps.getEmployees().subscribe(
      data => this.employees=data,
      error => {
        console.log("Error in List",error.message);
        this.errorMessage = error.message;
      });
  }

}
