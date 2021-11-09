import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-ad-banner',
  template: `
    <div class="ad-banner-example">
      <h3 style="padding: 5px; border: 1px solid black; width: 150px;" (click)="teste()">Advertisements</h3>

      <ng-template adHost></ng-template>
    </div>
  `,
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[] = [];

  currentAdIndex = -1;

  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;

  viewContainerRefVar!: ViewContainerRef;
  viewRef: any;

  ngOnInit() {
    // this.getAds();
  }

  teste() {
    this.loadComponent();
  }

  ngOnDestroy() {
    // clearInterval(this.interval);
  }

  loadComponent() {
    const adItem = this.ads[0];

    this.viewContainerRefVar = this.adHost.viewContainerRef;
    this.viewContainerRefVar.clear();

    this.viewRef = this.viewContainerRefVar.createComponent<AdComponent>(
      adItem.component
    );

    this.viewRef.instance.data = adItem.data;
    this.viewRef.instance.hasDestroy = this.viewRef;
  }

  // getAds() {
  //   this.interval = setInterval(() => {
  //     this.loadComponent();
  //   }, 3000);
  // }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
