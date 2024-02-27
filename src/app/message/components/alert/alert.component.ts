import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() featureName: string = "";

  ngOnInit(): void {
    this.featureName = this.featureName + " berhasil dilakukan."
  }

  ngOnDestroy(): void {
    console.log("tes")
    this.featureName = ""   
  }

}
