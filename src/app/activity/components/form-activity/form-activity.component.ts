import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form-activity',
  templateUrl: './form-activity.component.html',
  styleUrl: './form-activity.component.css',
})
export class FormActivityComponent {
  @Output() activityAdded = new EventEmitter<{time: string; type: string; activity_name:string}>();

  
  activityName: string = "Eat";
  activityType: string = "Not Priority";
  activityTime:string = ""
  
  constructor() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    this.activityTime = `${hours}:${minutes}`;
  }


  submitForm() {
    this.activityAdded.emit({time: this.activityTime, type: this.activityType, activity_name: this.activityName})
  }
}
