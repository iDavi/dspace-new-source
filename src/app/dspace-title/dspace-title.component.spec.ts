import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DspaceTitleComponent } from './dspace-title.component';

describe('DspaceTitleComponent', () => {
  let component: DspaceTitleComponent;
  let fixture: ComponentFixture<DspaceTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DspaceTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DspaceTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
