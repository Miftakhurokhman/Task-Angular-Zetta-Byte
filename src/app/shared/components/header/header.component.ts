import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router:Router){}

  openHomePage() {
    this.router.navigateByUrl("/")
  }

  openListPage(){
    this.router.navigateByUrl("/list-customer")
  }

  openFormPage() {
    this.router.navigateByUrl("/form?action=add")
  }
}
