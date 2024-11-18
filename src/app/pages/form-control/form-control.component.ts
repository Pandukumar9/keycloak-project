import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent {

  @Input() label: string = '';  // Label for the form control
  @Input() placeholder: string = '';  // Placeholder text for the input
  @Input() type: string = 'text';  // Type of input (default: text)
  @Input() control: AbstractControl | null = null; // Untyped FormControl passed from parent
  constructor() {}

  ngOnInit(): void {
    console.log(this.label,'label');
    console.log(this.placeholder,'placeholder');
    console.log(this.type,'type');
    console.log(this.control,'control');
  }


  // Helper method to get error messages based on control state
  getErrorMessage(): string | null {
    if (this.control?.hasError('required')) {
      return `${this.label} is required.`;
    }
    if (this.control?.hasError('minlength')) {
      return `${this.label} must be at least ${this.control?.getError('minlength').requiredLength} characters long.`;
    }
    if (this.control?.hasError('email')) {
      return `${this.label} must be a valid email address.`;
    }
    return null;
  }

}
