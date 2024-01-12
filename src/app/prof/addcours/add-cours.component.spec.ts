import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursComponent } from './add-cours.component';

describe('AddcoursComponent', () => {
  let component: AddCoursComponent;
  let fixture: ComponentFixture<AddCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
