import { Component } from '@angular/core';
import { UntypedFormArray, UntypedFormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-dynamic-form-4',
  templateUrl: './dynamic-form-4.component.html',
  styleUrls: ['./dynamic-form-4.component.scss']
})
export class DynamicForm4Component {
  userForm!: UntypedFormGroup;

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.userForm = this.formService.createUserForm();
  }

  // Add new phone input to FormArray
  addPhone() {
    const phones = this.userForm.get('phones') as UntypedFormArray;
    phones.push(this.formService.createPhoneFormControl());
  }

  // Remove a phone input from FormArray
  removePhone(index: number) {
    const phones = this.userForm.get('phones') as UntypedFormArray;
    phones.removeAt(index);
  }

  // Submit the form
  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
