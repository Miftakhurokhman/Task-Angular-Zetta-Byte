import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router:Router) {}
  openPage(pageName: string) {
    if (pageName == "form") {
      this.router.navigate(['/form'], {queryParams: {action: 'add'}})
    } else if (pageName == 'dashboard') {
      this.router.navigate(['/'])
    }
    
  }
}
