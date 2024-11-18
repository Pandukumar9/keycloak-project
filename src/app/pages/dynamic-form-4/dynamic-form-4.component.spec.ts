import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicForm4Component } from './dynamic-form-4.component';

describe('DynamicForm4Component', () => {
  let component: DynamicForm4Component;
  let fixture: ComponentFixture<DynamicForm4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicForm4Component]
    });
    fixture = TestBed.createComponent(DynamicForm4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
