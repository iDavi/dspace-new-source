import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundMouseEffectComponent } from './background-mouse-effect.component';

describe('BackgroundMouseEffectComponent', () => {
  let component: BackgroundMouseEffectComponent;
  let fixture: ComponentFixture<BackgroundMouseEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundMouseEffectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundMouseEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
