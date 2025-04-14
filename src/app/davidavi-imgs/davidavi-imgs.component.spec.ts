import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DavidaviImgsComponent } from './davidavi-imgs.component';

describe('DavidaviImgsComponent', () => {
  let component: DavidaviImgsComponent;
  let fixture: ComponentFixture<DavidaviImgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DavidaviImgsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DavidaviImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
