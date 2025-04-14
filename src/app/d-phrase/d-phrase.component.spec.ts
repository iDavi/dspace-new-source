import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DPhraseComponent } from './d-phrase.component';

describe('DPhraseComponent', () => {
  let component: DPhraseComponent;
  let fixture: ComponentFixture<DPhraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DPhraseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
