import { Injectable } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }
  createUserForm(): UntypedFormGroup {
    return new UntypedFormGroup({
      name: new UntypedFormControl('', [Validators.required, Validators.minLength(3)]),
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      phones: new UntypedFormArray([]),  // Ensure the phones array is initialized
    });
  }

  createPhoneFormControl(): UntypedFormControl {
    return new UntypedFormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]);
  }
}
