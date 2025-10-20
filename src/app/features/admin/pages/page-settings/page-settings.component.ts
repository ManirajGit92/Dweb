import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-page-settings',
  standalone: true,
  imports: [
    AccordionModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    CardModule,
    CommonModule,
  ],
  templateUrl: './page-settings.component.html',
  styleUrl: './page-settings.component.scss',
})
export class PageSettingsComponent {
  pageSetForm: FormGroup = this.pageSetFormGroup();
  pagesDetails: any = {
    homePage: [
      { bgImage: '', text: '' },
      { bgImage: '', text: '' },
    ],
    aboutusPage: [
      { title: '', detail: '' },
      { title: '', detail: '' },
    ],
    productsPage: [
      { title: '', detail: '' },
      { title: '', detail: '' },
    ],
  };
  constructor(private fb: FormBuilder) {}
  pageSetFormGroup() {
    debugger;
    return this.fb.group({
      homeItems: this.fb.array([
        this.fb.group({
          homeImage: ['', Validators.required],
          homeTitle: ['', Validators.required],
        }),
      ]),
      aboutusItems: this.fb.array([this.createItem('aboutus')]),
      productsItems: this.fb.array([this.createItem('products')]),
    });
    debugger;
  }
  createItem(action: string): FormGroup {
    if (action == 'home') {
      return this.fb.group({
        homeImage: ['', Validators.required],
        homeTitle: ['', Validators.required],
      });
    } else if (action == 'aboutus') {
      return this.fb.group({
        aboutusTitle: ['', Validators.required],
        aboutusDetail: ['', Validators.required],
      });
    } else if (action == 'products') {
      return this.fb.group({
        productsTitle: ['', Validators.required],
        productsDetail: ['', Validators.required],
      });
    } else {
      return this.fb.group({
        homeImage: ['', Validators.required],
        homeTitle: ['', Validators.required],
      });
    }
  }

  onSubmit() {
    console.log('pageSetForm==>', this.pageSetForm.value);
  }
  get homeItems(): FormArray {
    return this.pageSetForm.get('homeItems') as FormArray;
  }
  get aboutusItems(): FormArray {
    return this.pageSetForm.get('aboutusItems') as FormArray;
  }
  get productsItems(): FormArray {
    return this.pageSetForm.get('productsItems') as FormArray;
  }

  // Add a new set of controls
  addItem(action: string): void {
    switch (action) {
      case 'home':
        this.homeItems.push(this.createItem('home'));
        break;
      case 'aboutus':
        this.aboutusItems.push(this.createItem('aboutus'));
        break;
      case 'products':
        this.productsItems.push(this.createItem('products'));
        break;
      default:
        this.homeItems.push(this.createItem('home'));
        break;
    }
  }
  removeItem(action: string): void {
    switch (action) {
      case 'home':
        if (this.homeItems.length > 0) {
          this.homeItems.removeAt(this.homeItems.length - 1);
        }
        break;
      case 'aboutus':
        if (this.aboutusItems.length > 0) {
          this.aboutusItems.removeAt(this.aboutusItems.length - 1);
        }
        break;
      case 'products':
        if (this.productsItems.length > 0) {
          this.productsItems.removeAt(this.productsItems.length - 1);
        }
        break;
      default:
        if (this.homeItems.length > 0) {
          this.homeItems.removeAt(this.homeItems.length - 1);
        }
        break;
    }
  }
}
