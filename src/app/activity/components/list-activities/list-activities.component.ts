import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrl: './list-activities.component.css',
})
export class ListActivitiesComponent {
  @Input() listActivities: any;
}
