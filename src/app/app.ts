import { Component, Inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  constructor(
    private meta: Meta,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {

        if (isPlatformBrowser(this.platformId)) {

          const cleanUrl = window.location.href.split('?')[0];

          this.meta.updateTag({
            rel: 'canonical',
            href: cleanUrl
          });

          if (typeof gtag !== 'undefined') {
            gtag('config', 'G-E2J3GLK113', {
              page_path: event.urlAfterRedirects,
            });
          }

        }
      });
  }
}
