import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-item2',
  standalone: true,
  templateUrl: './event-item2.component.html',
  styleUrls: ['./event-item2.component.css']
})
export class EventItem2Component {
  @Input() task2Event: string = '';
  @Input() task2Date: string = '';
  @Input() task2Description: string = '';
}
