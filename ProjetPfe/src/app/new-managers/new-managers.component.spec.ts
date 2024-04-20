import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewManagersComponent } from './new-managers.component';

describe('NewManagersComponent', () => {
  let component: NewManagersComponent;
  let fixture: ComponentFixture<NewManagersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewManagersComponent]
    });
    fixture = TestBed.createComponent(NewManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
