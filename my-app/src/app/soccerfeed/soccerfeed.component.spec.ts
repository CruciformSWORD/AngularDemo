import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerfeedComponent } from './soccerfeed.component';

describe('SoccerfeedComponent', () => {
  let component: SoccerfeedComponent;
  let fixture: ComponentFixture<SoccerfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoccerfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoccerfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
