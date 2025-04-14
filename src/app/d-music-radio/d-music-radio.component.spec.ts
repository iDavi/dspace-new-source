import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DMusicRadioComponent } from './d-music-radio.component';

describe('DMusicRadioComponent', () => {
  let component: DMusicRadioComponent;
  let fixture: ComponentFixture<DMusicRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DMusicRadioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DMusicRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
