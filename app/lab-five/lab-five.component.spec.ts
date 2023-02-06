import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabFiveComponent } from './lab-five.component';

describe('LabFiveComponent', () => {
  let component: LabFiveComponent;
  let fixture: ComponentFixture<LabFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LabFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
