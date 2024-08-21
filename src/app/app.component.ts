import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventItemComponent } from './event-item/event-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '20.08.24_ngFor';
}
