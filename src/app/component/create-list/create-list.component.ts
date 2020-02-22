import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-list",
  templateUrl: "./create-list.component.html",
  styleUrls: ["./create-list.component.scss"]
})
export class CreateListComponent implements OnInit {
  empDatas = [];
  @Input() empData = { name: "", email: "", salary: 0 };

  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    let details = [];
    details = JSON.parse(localStorage.getItem("empData")) || [];
    details.push(this.empData);
    localStorage.setItem("empData", JSON.stringify(details));
    this.router.navigate(["/list"]);
  }
}
