import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIdeaModalComponent } from './new-idea-modal.component';

describe('NewIdeaModalComponent', () => {
  let component: NewIdeaModalComponent;
  let fixture: ComponentFixture<NewIdeaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIdeaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIdeaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
