import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularMaterial1';
  openSideBar = false

  toggleSidebar(): void {
    // Mengakses #sidenav dan melakukan toggle
    const sidenav = document.querySelector<HTMLElement>('.mat-sidenav')!;
    sidenav.classList.toggle('mat-drawer-opened');
    this.openSideBar = !this.openSideBar
  }
}
