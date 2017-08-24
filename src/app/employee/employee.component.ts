import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  FirstName :string;
  LastName : string;
  Castle: string;
  age:number;

  constructor() { }

  ngOnInit() {
    this.FirstName="Stannis";
    this.age=50;
    this.LastName="Baratheon";
    this.Castle="Dragonstone";
  }

}
