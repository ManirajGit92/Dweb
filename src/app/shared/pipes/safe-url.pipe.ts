import { Pipe, PipeTransform } from '@angular/core';
import {
  DomSanitizer,
  SafeUrl,
  SafeResourceUrl,
} from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl',
  standalone: true, // ✅ important for standalone usage
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(
    value: string | null | undefined,
    type: 'url' | 'resource' = 'url'
  ): SafeUrl | SafeResourceUrl | null {
    if (!value) return null;

    return type === 'resource'
      ? this.sanitizer.bypassSecurityTrustResourceUrl(value)
      : this.sanitizer.bypassSecurityTrustUrl(value);
  }
}
