import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicForm2Component } from './dynamic-form-2.component';

describe('DynamicForm2Component', () => {
  let component: DynamicForm2Component;
  let fixture: ComponentFixture<DynamicForm2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicForm2Component]
    });
    fixture = TestBed.createComponent(DynamicForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
