import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() configData: any;
  creatorName = 'Maniraj';
  contactEmail = 'example@gmail.com';
  contactPhone = '+91 9876543210';
  footerSections = [
    {
      title: 'Important Links',
      position: 'footer-left',
      links: [
        { name: 'Home', url: '/home' },
        { name: 'About', url: '/about' },
      ],
    },
    {
      title: 'Resources',
      position: 'footer-center',
      links: [
        { name: 'Blog', url: '/blog' },
        { name: 'Docs', url: '/docs' },
      ],
    },
    {
      title: 'Connect',
      position: 'footer-right',
      links: [
        { name: 'Contact', url: '/contact' },
        { name: 'Privacy', url: '/privacy' },
      ],
    },
  ];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['configData'] && changes['configData'].currentValue) {
      this.updateHeader(changes['configData'].currentValue);
    }
  }

  updateHeader(data: any) {
    this.configData = data;
    console.log('updated configData ===>', this.configData);
    this.footerSections = [];
    let linksLeft: any[] = [];
    let linksCenter: any[] = [];
    let linksRight: any[] = [];
    let leftTitle: string = '';
    let centerTitle: string = '';
    let rightTitle: string = '';
    this.configData.forEach((element: any) => {
      if (element.position == 'left') {
        leftTitle = element.header;
        linksLeft.push({ name: element.title, url: element.detail });
      } else if (element.position == 'center') {
        centerTitle = element.header;
        linksCenter.push({ name: element.title, url: element.detail });
      } else if (element.position == 'right') {
        rightTitle = element.header;
        linksRight.push({ name: element.title, url: element.detail });
      }
    });

    this.footerSections.push({
      title: leftTitle,
      position: 'footer-left',
      links: linksLeft,
    });
    this.footerSections.push({
      title: centerTitle,
      position: 'footer-center',
      links: linksCenter,
    });
    this.footerSections.push({
      title: rightTitle,
      position: 'footer-right',
      links: linksRight,
    });
    console.log('updated footer ===>', this.footerSections);
  }
}
