import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleImageTextCardComponent } from './title-image-text-card.component';

describe('TitleImageTextCardComponent', () => {
  let component: TitleImageTextCardComponent;
  let fixture: ComponentFixture<TitleImageTextCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleImageTextCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleImageTextCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
