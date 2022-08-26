import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoployeeReviewComponent } from './emoployee-review.component';

describe('EmoployeeReviewComponent', () => {
  let component: EmoployeeReviewComponent;
  let fixture: ComponentFixture<EmoployeeReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmoployeeReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmoployeeReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
