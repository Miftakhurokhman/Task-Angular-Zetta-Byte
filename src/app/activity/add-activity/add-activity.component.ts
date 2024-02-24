import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrl: './add-activity.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AddActivityComponent {
  listActivities = [
    {
      time : "11:30",
      type : "Not Priority",
      activity_name : "Fishing"
    },
    {
      time : "12:00",
      type : "Priority",
      activity_name : "Praying"
    },
  ];

  onActivityAdded(activityData : {time: string; type: string; activity_name:string}) {
    this.listActivities.push(activityData)
  }
}
