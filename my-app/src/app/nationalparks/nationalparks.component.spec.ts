import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalParksComponent } from './nationalparks.component';

describe('NationalparksComponent', () => {
  let component: NationalParksComponent;
  let fixture: ComponentFixture<NationalParksComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalParksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalParksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
