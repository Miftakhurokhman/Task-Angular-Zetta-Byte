import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrl: './success-alert.component.css'
})
export class SuccessAlertComponent implements OnInit, OnDestroy {
  @Input() message: any;
  gifUrl: string = "";

  ngOnInit(): void {
      this.gifUrl = "https://www.odysseydumpster.com/wp-content/uploads/2019/09/success.gif"
  }

  ngOnDestroy(): void {
      this.message = "";
      this.gifUrl = "";
  }
}
