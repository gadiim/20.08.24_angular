import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-item',
  standalone: true,
  imports: [],
  templateUrl: './event-item.component.html',
  styleUrl: './event-item.component.css'
})
export class EventItemComponent {
  @Input() event: string = 'Nuclear Bomb Explosion in Boston';
  @Input() date: string = 'October 23, 207';
  @Input() description: string = 'This event marked the beginning of the Great War,' +
    'a conflict that lasted only two hours but changed the world forever.' +
    'During the war, numerous nuclear missiles were launched from both sides,' +
    'between the U.S. and China. One of the targets was Boston, which was devastated' +
    'by the blast, leaving the city in ruins and creating the Wasteland.';
}
