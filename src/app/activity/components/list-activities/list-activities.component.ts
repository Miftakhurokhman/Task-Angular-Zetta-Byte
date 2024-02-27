import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.css'],
})
export class ListActivitiesComponent {
  @Input() listActivities: any;
}