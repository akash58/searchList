import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private route: Router, private location: Location) {
    this.route.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        return this.route.url;
      }
    });
  }

  ngOnInit() {}

  goBack() {
    this.location.back();
  }
}
