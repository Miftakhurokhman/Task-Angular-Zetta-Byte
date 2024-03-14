// sidebar.component.ts
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  openSideBar: boolean = true;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private router: Router){}

  openPage(pageName: string) {
    if (pageName == "list") {
      this.router.navigate(["/"])
    } else if (pageName == "add") {
      this.router.navigate(["/form"], {queryParams:{action: "add"}})
    }
  }

  toggleSidebar() {
    this.openSideBar = !this.openSideBar;
    this.sidenav.toggle();
  }
}
