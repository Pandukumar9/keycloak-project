import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicForm3Component } from './dynamic-form-3.component';

describe('DynamicForm3Component', () => {
  let component: DynamicForm3Component;
  let fixture: ComponentFixture<DynamicForm3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicForm3Component]
    });
    fixture = TestBed.createComponent(DynamicForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
