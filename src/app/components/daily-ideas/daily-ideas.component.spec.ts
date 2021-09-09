import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyIdeasComponent } from './daily-ideas.component';

describe('DailyIdeasComponent', () => {
  let component: DailyIdeasComponent;
  let fixture: ComponentFixture<DailyIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyIdeasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
