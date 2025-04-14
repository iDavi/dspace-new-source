import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DavidavidaviComponent } from './davidavidavi.component';

describe('DavidavidaviComponent', () => {
  let component: DavidavidaviComponent;
  let fixture: ComponentFixture<DavidavidaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DavidavidaviComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DavidavidaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
