import { Component } from '@angular/core';
import { AbstractControl, UntypedFormArray, UntypedFormControl, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {
  productForm: UntypedFormGroup;

  constructor() {
    this.productForm = new UntypedFormGroup({
      products: new UntypedFormArray([]),
    });
    this.addProduct(); // Add an initial product for demonstration
  }

  // Getter for products array
  get products(): UntypedFormArray {
    return this.productForm.get('products') as UntypedFormArray;
  }

  // Getter for tags within a product
  tags(index: number): UntypedFormArray {
    return this.products.at(index).get('tags') as UntypedFormArray;
  }

  // Retrieve all controls for tags of a specific product
  tagsControls(productIndex: number): UntypedFormControl[] {
    return this.tags(productIndex).controls as UntypedFormControl[];
  }

  // Add a new product group
  addProduct() {
    const productGroup = new UntypedFormGroup({
      name: new UntypedFormControl('', Validators.required),
      price: new UntypedFormControl('', [Validators.required, Validators.min(1)]),
      tags: new UntypedFormArray([this.createTagControl()]),
    });
    this.products.push(productGroup);
  }

  // Add a new tag to a specific product
  addTag(productIndex: number) {
    this.tags(productIndex).push(this.createTagControl());
  }

  // Create a new tag control
  createTagControl(): UntypedFormControl {
    return new UntypedFormControl('', Validators.required);
  }

  // Submit the form
  submitForm() {
    if (this.productForm.valid) {
      console.log('Form Submitted!', this.productForm.value);
      alert('Form submitted successfully!');
    } else {
      console.log('Form is invalid.');
      alert('Please correct the errors in the form.');
    }
  }

  removeTag(productIndex: number, tagIndex: number) {
    const tagsArray = this.tags(productIndex);
    if (tagsArray.length > 1) {
      tagsArray.removeAt(tagIndex);
    } else {
      alert('At least one tag is required.');
    }
  }


}
