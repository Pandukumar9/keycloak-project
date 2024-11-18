import { Component } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-2',
  templateUrl: './dynamic-form-2.component.html',
  styleUrls: ['./dynamic-form-2.component.scss']
})
export class DynamicForm2Component {

  productForm: UntypedFormGroup;

  constructor() {
    this.productForm = new UntypedFormGroup({
      products: new UntypedFormArray([]),
    });

    // Add some initial products for demonstration
    this.addMultipleProducts([
      { name: 'Apple', price: 100, tags: ['Fresh', 'Organic'] },
      { name: 'Banana', price: 50, tags: ['Seasonal'] },
    ]);
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

  // Add multiple tags to a specific product
  addMultipleTags(productIndex: number, tags: string[]) {
    const tagsArray = this.tags(productIndex);
    for (const tag of tags) {
      tagsArray.push(new UntypedFormControl(tag, Validators.required));
    }
  }

  // Add multiple products
  addMultipleProducts(products: { name: string; price: number; tags: string[] }[]) {
    for (const product of products) {
      const productGroup = new UntypedFormGroup({
        name: new UntypedFormControl(product.name, Validators.required),
        price: new UntypedFormControl(product.price, [Validators.required, Validators.min(1)]),
        tags: new UntypedFormArray(
          product.tags.map((tag) => new UntypedFormControl(tag, Validators.required))
        ),
      });
      this.products.push(productGroup);
    }
  }

  // Remove a tag but ensure at least one remains
  removeTag(productIndex: number, tagIndex: number) {
    const tagsArray = this.tags(productIndex);
    if (tagsArray.length > 1) {
      tagsArray.removeAt(tagIndex);
    } else {
      alert('At least one tag is required.');
    }
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

}
