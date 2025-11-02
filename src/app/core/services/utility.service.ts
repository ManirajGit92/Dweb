import { Injectable } from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor(private sanitizer: DomSanitizer) {}

  getSafeHtml(htmlString: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(htmlString);
  }

  // for <a>, <img>, etc.
  getSafeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  // ✅ for <iframe>, <embed>, etc.
  getSafeResourceUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
