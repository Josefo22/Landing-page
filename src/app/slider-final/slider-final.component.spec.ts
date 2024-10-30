import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderFinalComponent } from './slider-final.component';

describe('SliderFinalComponent', () => {
  let component: SliderFinalComponent;
  let fixture: ComponentFixture<SliderFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
