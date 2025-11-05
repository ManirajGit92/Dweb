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
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

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
    DropdownModule,
    ToastModule,
  ],
  templateUrl: './page-settings.component.html',
  styleUrl: './page-settings.component.scss',
})
export class PageSettingsComponent {
  pageSetForm: FormGroup = this.pageSetFormGroup();
  contactusOptions: any[] = [
    { label: 'Address', value: 'address' },
    { label: 'Map', value: 'Map' },
    { label: 'Email', value: 'Email' },
    { label: 'Chart', value: 'Chart' },
  ];
  headerMenuOtions: any[] = [
    { label: 'Scroll', value: 'scroll' },
    { label: 'Navigate', value: 'navigate' },
  ];
  webSettings: any = {
    logo: 'https://cdn-icons-png.flaticon.com/512/4257/4257824.png',
    sitename: 'NewDweb',
    font: '',
    textcolor: '',
    darktheme: '0',
  };
  constructor(
    private fb: FormBuilder,
    private crudService: CrudService,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    this.getWebPageDataById();
  }
  show(
    severity: string = 'info',
    summary: string = 'Info',
    detail: string = 'Message Content',
    life: number = 3000
  ) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
      life: life,
    });
  }
  getWebPageDataById() {
    this.crudService.getWebContentById(1).subscribe((data: any) => {
      this.pageSetForm.patchValue({
        logo: data.settings.logo,
        sitename: data.settings.sitename,
      });
      data.header?.forEach((item: any) => {
        this.header.push(
          this.fb.group({
            title: [item.title, Validators.required],
            detail: [item.detail, Validators.required],
            type: [item.type, Validators.required],
          })
        );
      });
      data.footer?.forEach((item: any) => {
        this.footer.push(
          this.fb.group({
            title: [item.title, Validators.required],
            detail: [item.detail, Validators.required],
          })
        );
      });
      data.contactus?.forEach((item: any) => {
        this.contactus.push(
          this.fb.group({
            title: [item.title, Validators.required],
            detail: [item.detail, Validators.required],
          })
        );
      });
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
            image: [item.image, Validators.required],
            detail: [item.detail, Validators.required],
          })
        );
      });
    });
  }

  pageSetFormGroup() {
    return this.fb.group({
      logo: ['', Validators.required],
      sitename: ['', Validators.required],
      header: this.fb.array([]),
      footer: this.fb.array([]),
      contactus: this.fb.array([]),
      home: this.fb.array([]),
      aboutus: this.fb.array([]),
      products: this.fb.array([]),
    });
  }
  createItem(action: string): FormGroup {
    if (action == 'header') {
      return this.fb.group({
        title: ['', Validators.required],
        detail: ['', Validators.required],
      });
    } else if (action == 'home') {
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
        image: ['', Validators.required],
        detail: ['', Validators.required],
      });
    } else if (action == 'contactus') {
      return this.fb.group({
        title: ['', Validators.required],
        detail: ['', Validators.required],
      });
    } else if (action == 'footer') {
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
    this.webSettings.logo = this.pageSetForm.value.logo;
    this.webSettings.sitename = this.pageSetForm.value.sitename;
    let payload = {
      webpageid: 'webpage1',
      header: this.pageSetForm.value.header,
      home: this.pageSetForm.value.home,
      aboutus: this.pageSetForm.value.aboutus,
      products: this.pageSetForm.value.products,
      contactus: this.pageSetForm.value.contactus,
      footer: this.pageSetForm.value.footer,
      settings: this.webSettings,
    };
    this.crudService.updateWebContent(1, payload).subscribe(() => {
      //this.getWebPageDataById();
      this.show('success', 'Success', 'Content Updated Successfully', 3000);
    });
  }
  get header(): FormArray {
    return this.pageSetForm.get('header') as FormArray;
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
  get contactus(): FormArray {
    return this.pageSetForm.get('contactus') as FormArray;
  }
  get footer(): FormArray {
    return this.pageSetForm.get('footer') as FormArray;
  }

  // Add a new set of controls
  addItem(action: string): void {
    switch (action) {
      case 'header':
        this.header.push(this.createItem('header'));
        break;
      case 'home':
        this.home.push(this.createItem('home'));
        break;
      case 'aboutus':
        this.aboutus.push(this.createItem('aboutus'));
        break;
      case 'products':
        this.products.push(this.createItem('products'));
        break;
      case 'contactus':
        this.contactus.push(this.createItem('contactus'));
        break;
      case 'footer':
        this.footer.push(this.createItem('footer'));
        break;
      default:
        this.home.push(this.createItem('home'));
        break;
    }
  }
  removeItem(action: string): void {
    switch (action) {
      case 'header':
        if (this.header.length > 0) {
          this.header.removeAt(this.header.length - 1);
        }
        break;
      case 'contactus':
        if (this.contactus.length > 0) {
          this.contactus.removeAt(this.contactus.length - 1);
        }
        break;
      case 'footer':
        if (this.footer.length > 0) {
          this.footer.removeAt(this.footer.length - 1);
        }
        break;
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
        break;
    }
  }
  deleteMenu(section: string, index: number) {
    console.log(index);
    switch (section) {
      case 'header':
        if (this.header.length > 0) {
          this.header.removeAt(index);
        }
        break;
      case 'contactus':
        if (this.contactus.length > 0) {
          this.contactus.removeAt(index);
        }
        break;
      case 'footer':
        if (this.footer.length > 0) {
          this.footer.removeAt(index);
        }
        break;
      case 'home':
        if (this.home.length > 0) {
          this.home.removeAt(index);
        }
        break;
      case 'aboutus':
        if (this.aboutus.length > 0) {
          this.aboutus.removeAt(index);
        }
        break;
      case 'products':
        if (this.products.length > 0) {
          this.products.removeAt(index);
        }
        break;
      default:
        break;
    }
  }
  resetAll() {
    this.crudService.resetAllWebContent().subscribe(() => {
      this.show('success', 'Success', 'Table Reset Successfully', 3000);
    });
  }
}
