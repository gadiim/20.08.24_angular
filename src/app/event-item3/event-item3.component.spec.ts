import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventItem3Component } from './event-item3.component';

describe('EventItem3Component', () => {
  let component: EventItem3Component;
  let fixture: ComponentFixture<EventItem3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventItem3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventItem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
