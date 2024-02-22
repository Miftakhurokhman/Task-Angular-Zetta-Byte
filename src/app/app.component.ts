import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-2';
  listImages = [
    {
      image_url : "https://images.unsplash.com/photo-1541110729715-84eeda8be2be?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwdmlld3xlbnwwfHwwfHx8MA%3D%3D",
      image_title : "Lorem ipsum dolor sit."
    },
    {
      image_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlRW5t89wHTyzXBPrIZikgcrPytE3aFFJQQo_VsPbCQ4zvfaIZQO922c6vug&s",
      image_title : "Lorem ipsum dolor sit."
    },
  ]
}
