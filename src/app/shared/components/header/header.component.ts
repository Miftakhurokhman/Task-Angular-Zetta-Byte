import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() toggleSidebarEvent = new EventEmitter<void>();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.toggleSidebarEvent.emit();
  }

  openPage(open: string) {
    if (open == 'list') {
      this.router.navigate(['/']);
    } else if (open == 'add') {
      this.router.navigate(['/form'], {queryParams:{action: 'add'}})
    }
  }
}
