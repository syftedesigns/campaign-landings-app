import { Component, OnInit, DoCheck } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-menu-ads',
  templateUrl: './menu-ads.component.html',
  styleUrls: ['./menu-ads.component.css']
})
export class MenuAdsComponent implements OnInit, DoCheck {
  public URL_PATH: string = '';
  public URL_VIEW: string = '';
  constructor() { }

  ngOnInit() {
    this.URL_VIEW = window.location.href;
    this.LangMenu(window.location.href);
  }
  ngDoCheck() {
    const withBtn = document.getElementById('button-menu').offsetWidth;
    const elements: any = document.getElementsByClassName('mat-menu-panel');
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.width = `${withBtn}px`;
    }
  }
  LangMenu(PATH_URL: string): void {
    switch (PATH_URL) {
      case 'https://www.syftedesigns.com/campaign/application/':
        this.URL_PATH = PATH_URL.replace('application/', 'es/application/');
      break;
      case 'https://www.syftedesigns.com/campaign/website/':
          this.URL_PATH = PATH_URL.replace('website/', 'es/website/');
      break;
      case 'https://www.syftedesigns.com/campaign/branding/':
            this.URL_PATH = PATH_URL.replace('branding/', 'es/branding/');
      break;
      case 'https://www.syftedesigns.com/campaign/ecommerce/':
              this.URL_PATH = PATH_URL.replace('ecommerce/', 'es/ecommerce/');
      break;
      case 'https://www.syftedesigns.com/campaign/marketing/':
            this.URL_PATH = PATH_URL.replace('marketing/', 'es/marketing/');
      break;
      default:
        console.log('Es local');
    }
  }
}
