import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventItem2Component } from './event-item2.component';

describe('EventItem2Component', () => {
  let component: EventItem2Component;
  let fixture: ComponentFixture<EventItem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventItem2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
