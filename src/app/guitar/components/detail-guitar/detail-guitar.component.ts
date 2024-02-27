import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-detail-guitar',
  templateUrl: './detail-guitar.component.html',
  styleUrl: './detail-guitar.component.css'
})
export class DetailGuitarComponent {
  @Input() choosedGuitar: any;
}
