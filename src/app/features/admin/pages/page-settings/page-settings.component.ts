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
import { CrudService } from '../../../../core/services/crud.service';

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

  constructor(private fb: FormBuilder, private crudService: CrudService) {}
  ngOnInit() {
    this.getWebPageDataById();
  }

  getWebPageDataById() {
    this.crudService.getWebContentById(1).subscribe((data: any) => {
      data.home.forEach((item: any) => {
        this.home.push(
          this.fb.group({
            image: [item.image, Validators.required],
            title: [item.title, Validators.required],
            detail: [item.detail],
          })
        );
      });
      data.aboutus.forEach((item: any) => {
        this.aboutus.push(
          this.fb.group({
            title: [item.title, Validators.required],
            detail: [item.detail, Validators.required],
          })
        );
      });
      data.products.forEach((item: any) => {
        this.products.push(
          this.fb.group({
            title: [item.title, Validators.required],
            detail: [item.detail, Validators.required],
          })
        );
      });
    });
  }

  pageSetFormGroup() {
    return this.fb.group({
      home: this.fb.array([]),
      aboutus: this.fb.array([]),
      products: this.fb.array([]),
    });
  }
  createItem(action: string): FormGroup {
    if (action == 'home') {
      return this.fb.group({
        image: ['', Validators.required],
        title: ['', Validators.required],
        detail: ['', Validators.required],
      });
    } else if (action == 'aboutus') {
      return this.fb.group({
        title: ['', Validators.required],
        detail: ['', Validators.required],
      });
    } else if (action == 'products') {
      return this.fb.group({
        title: ['', Validators.required],
        detail: ['', Validators.required],
      });
    } else {
      return this.fb.group({
        image: ['', Validators.required],
        title: ['', Validators.required],
        detail: ['', Validators.required],
      });
    }
  }

  onSubmit() {
    let payload = {
      webpageid: 'webpage1',
      home: this.pageSetForm.value.home,
      aboutus: this.pageSetForm.value.aboutus,
      products: this.pageSetForm.value.products,
    };
    this.crudService.updateWebContent(1, payload).subscribe(() => {
      this.getWebPageDataById();
    });
  }
  get home(): FormArray {
    return this.pageSetForm.get('home') as FormArray;
  }
  get aboutus(): FormArray {
    return this.pageSetForm.get('aboutus') as FormArray;
  }
  get products(): FormArray {
    return this.pageSetForm.get('products') as FormArray;
  }

  // Add a new set of controls
  addItem(action: string): void {
    switch (action) {
      case 'home':
        this.home.push(this.createItem('home'));
        break;
      case 'aboutus':
        this.aboutus.push(this.createItem('aboutus'));
        break;
      case 'products':
        this.products.push(this.createItem('products'));
        break;
      default:
        this.home.push(this.createItem('home'));
        break;
    }
  }
  removeItem(action: string): void {
    switch (action) {
      case 'home':
        if (this.home.length > 0) {
          this.home.removeAt(this.home.length - 1);
        }
        break;
      case 'aboutus':
        if (this.aboutus.length > 0) {
          this.aboutus.removeAt(this.aboutus.length - 1);
        }
        break;
      case 'products':
        if (this.products.length > 0) {
          this.products.removeAt(this.products.length - 1);
        }
        break;
      default:
        if (this.home.length > 0) {
          this.home.removeAt(this.home.length - 1);
        }
        break;
    }
  }
}
