import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInventoryPrototypeComponent } from './student-inventory-prototype.component';

describe('StudentInventoryPrototypeComponent', () => {
  let component: StudentInventoryPrototypeComponent;
  let fixture: ComponentFixture<StudentInventoryPrototypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentInventoryPrototypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInventoryPrototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
