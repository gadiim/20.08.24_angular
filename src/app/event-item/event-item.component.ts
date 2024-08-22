import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-item',
  standalone: true,
  imports: [],
  templateUrl: './event-item.component.html',
  styleUrl: './event-item.component.css'
})
export class EventItemComponent {
  // @Input() event: string = 'Nuclear Bomb Explosion in Boston';
  // @Input() date: string = '2077';
  // @Input() description: string = 'This event marked the beginning of the Great War,' +
  //   'a conflict that lasted only two hours but changed the world forever.' +
  //   'During the war, numerous nuclear missiles were launched from both sides,' +
  //   'between the U.S. and China. One of the targets was Boston, which was devastated' +
  //   'by the blast, leaving the city in ruins and creating the Wasteland.';
  @Input() event: string = 'The Battle of Bunker Hill';
  @Input() date: string = '2287';
  @Input() description: string = 'Taking place at the historic Bunker Hill monument in' +
    'the year 2287, this battle involves multiple factions, including the Railroad,' +
    'the Institute, the Brotherhood of Steel, and the Commonwealth Minutemen.' +
    ' Each faction has its own interests in securing the Synths hidden at Bunker Hill.';
}

