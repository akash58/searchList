import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

interface Country {
  name: string;
  email: string;
  salary: number;
}

const empDetails: Country[] = JSON.parse(localStorage.getItem('empData'));

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  searchText;
  empList: any;
  objectsFromEmpDataStorage: any;
  page = 1;
  pageSize = 5;
  collectionSize = empDetails.length;

  constructor(private router: Router,) { }

  ngOnInit() {
    this.empList = localStorage.getItem("empData");
    this.objectsFromEmpDataStorage = JSON.parse(this.empList);
  }

  createList() {
    this.router.navigate(["/create-list"]);
  }

  callSearch() {
    this.objectsFromEmpDataStorage = [];
    let resetAllEmpData = JSON.parse(this.empList);
    for (const valueAllData of resetAllEmpData) {
      if(this.searchText == '' || this.searchText == null) {
        this.objectsFromEmpDataStorage.push(valueAllData);
      }
    }
  }

  lessThanData(){
    this.objectsFromEmpDataStorage = [];
    console.log(this.objectsFromEmpDataStorage, 'objectsFromEmpDataStorage less than')
    for (const value of empDetails) {
      console.log(value, 'less than')
      if(value.salary < this.searchText) {
        this.objectsFromEmpDataStorage.push(value);
        console.log(this.objectsFromEmpDataStorage, 'inside id')
      }
    }
  }

  greaterThanData(){
    this.objectsFromEmpDataStorage = [];
    let allEmpData = JSON.parse(this.empList);
    for (const value of allEmpData) {
      if(value.salary > this.searchText) {
        this.objectsFromEmpDataStorage.push(value);
      }
    }
  }

  get empAllDatas() {
    return empDetails
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
