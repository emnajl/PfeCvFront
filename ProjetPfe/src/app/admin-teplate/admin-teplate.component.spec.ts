import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeplateComponent } from './admin-teplate.component';

describe('AdminTeplateComponent', () => {
  let component: AdminTeplateComponent;
  let fixture: ComponentFixture<AdminTeplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTeplateComponent]
    });
    fixture = TestBed.createComponent(AdminTeplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
