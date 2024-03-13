import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() openSideBar: boolean = false;

  constructor(private router: Router){}

  openPage(pageName: string) {
    if (pageName == "list") {
      this.router.navigate(["/"])
    } else if (pageName == "add") {
      this.router.navigate(["/form"], {queryParams:{action: "add"}})
    }
  }
}
