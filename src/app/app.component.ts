import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf } from '@angular/common';
import { EventItemComponent } from './event-item/event-item.component';
import { EventItem2Component } from './event-item2/event-item2.component';
import { EventItem3Component } from './event-item3/event-item3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventItemComponent, EventItem2Component, EventItem3Component, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 task2Event = 'Nuclear Bomb Explosion in Boston';
  task2Date = '2077';
  task2Description = 'This event marked the beginning of the Great War,' +
    'a conflict that lasted only two hours but changed the world forever.' +
    'During the war, numerous nuclear missiles were launched from both sides,' +
    'between the U.S. and China. One of the targets was Boston, which was devastated' +
    'by the blast, leaving the city in ruins and creating the Wasteland.';
  event3Data = [
    {task3Event: 'Nuclear Bomb Explosion in Boston',
    task3Date: '2077',
    task3Description: 'This event marked the beginning of the Great War,' +
      'a conflict that lasted only two hours but changed the world forever.' +
      'During the war, numerous nuclear missiles were launched from both sides,' +
      'between the U.S. and China. One of the targets was Boston, which was devastated' +
      'by the blast, leaving the city in ruins and creating the Wasteland.'},
    {task3Event: 'The Battle of Bunker Hill',
    task3Date: '2287',
    task3Description: 'Taking place at the historic Bunker Hill monument in' +
    'the year 2287, this battle involves multiple factions, including the Railroad,' +
    'the Institute, the Brotherhood of Steel, and the Commonwealth Minutemen.' +
    ' Each faction has its own interests in securing the Synths hidden at Bunker Hill.'}
    ]
}

