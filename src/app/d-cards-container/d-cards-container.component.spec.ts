import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCardsContainerComponent } from './d-cards-container.component';

describe('DCardsContainerComponent', () => {
  let component: DCardsContainerComponent;
  let fixture: ComponentFixture<DCardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DCardsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
