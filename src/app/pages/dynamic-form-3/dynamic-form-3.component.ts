import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-dynamic-form-3',
  templateUrl: './dynamic-form-3.component.html',
  styleUrls: ['./dynamic-form-3.component.scss']
})
export class DynamicForm3Component implements OnInit{

  genAIFormGroup!: UntypedFormGroup;

  ngOnInit() {
    this.genAIFormGroup = new UntypedFormGroup({
      searchKeyword: new UntypedFormControl(''),
      userInputFormArray: new UntypedFormArray([]),
    });

    this.addFormGroup(); // Initialize the first form group

    // Set up search keyword listener
    this.genAIFormGroup.get('searchKeyword')?.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe((res) => {
      console.log('Search keyword:', res);
    });
  }

  get userInputFormArray(): UntypedFormArray {
    return this.genAIFormGroup.get('userInputFormArray') as UntypedFormArray;
  }

  addFormGroup() {
    this.userInputFormArray.push(
      new UntypedFormGroup({
        fname: new UntypedFormControl('', [Validators.required, Validators.minLength(3)]),
        lname: new UntypedFormControl('', [Validators.required, Validators.minLength(3)]),
        email: new UntypedFormControl('', [Validators.required, Validators.email]),
        city: new UntypedFormControl('', [Validators.required, Validators.minLength(3)]),
      })
    );
  }

  removeFormGroup(index: number) {
    if (this.userInputFormArray.length > 1) {
      this.userInputFormArray.removeAt(index);
    }
  }

  onSubmit() {
    if (this.genAIFormGroup.valid) {
      console.log('Form Values:', this.genAIFormGroup.value);
    } else {
      console.log('Form is invalid!');
      this.markAllAsTouched();
    }
  }

  markAllAsTouched() {
    this.userInputFormArray.controls.forEach((control) => {
      control.markAllAsTouched();
    });
  }

  isFieldInvalid(groupIndex: number, fieldName: string): boolean {
    const group = this.userInputFormArray.at(groupIndex) as UntypedFormGroup;
    const field = group.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }


  trackByFn(index: number): number {
    return index;
  }
}
