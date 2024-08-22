import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-item3',
  standalone: true,
  imports: [],
  templateUrl: './event-item3.component.html',
  styleUrl: './event-item3.component.css'
})
export class EventItem3Component {
  @Input() task3Event: string = '';
  @Input() task3Date: string = '';
  @Input() task3Description: string = '';
}
