import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SchemaService {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  addSchema(schema: object) {
    const existing = this.document.querySelector('script[type="application/ld+json"]');
    if (existing) existing.remove();

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }

  removeSchema() {
    const script = this.document.querySelector('script[type="application/ld+json"]');
    if (script) script.remove();
  }
}
