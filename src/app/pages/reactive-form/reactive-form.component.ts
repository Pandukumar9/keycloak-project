import { Component } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  exampleForm: UntypedFormGroup;

  constructor() {
    // Create an untyped form group with untyped controls
    this.exampleForm = new UntypedFormGroup({
      username: new UntypedFormControl('', [Validators.required, Validators.minLength(3)]),
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    if (this.exampleForm.valid) {
      console.log(this.exampleForm.value);
    }
    this.exampleForm.controls['username']
  }
}
