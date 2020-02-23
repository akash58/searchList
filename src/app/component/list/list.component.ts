import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  searchText;
  empList: any;
  objectsFromEmpDataStorage: any;

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
    let allEmpData = JSON.parse(this.empList);
    for (const value of allEmpData) {
      if(value.salary < this.searchText) {
        this.objectsFromEmpDataStorage.push(value);
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
}
