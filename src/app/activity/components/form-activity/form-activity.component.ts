import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-form-activity',
  templateUrl: './form-activity.component.html',
  styleUrls: ['./form-activity.component.css'],
})
export class FormActivityComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @Output() activityAdded = new EventEmitter<{time: string; type: string; activity_name:string}>();
  @Input() activityName: any;

  activityType: string = "Not Priority";
  activityTime:string = "";

  constructor() {}

  ngOnInit(): void {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    this.activityTime = `${hours}:${minutes}`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Activity name changed:', changes['activityName'].currentValue);
  }

  ngOnDestroy(): void {
    this.activityTime = "";
    this.activityName = "";
    this.activityType = "";
  }

  ngAfterViewInit(): void {
    console.log('View telah diinisialisasi.');
  }

  submitForm() {
    this.activityAdded.emit({time: this.activityTime, type: this.activityType, activity_name: this.activityName});
  }
}
