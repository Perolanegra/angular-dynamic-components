import { Component, Input, OnInit, OnDestroy, ComponentRef } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>{{data.name}}</h4>

      <p (click)="destruir()">{{data.bio}}sss</p>

      <strong>Hire this hero today!</strong>
    </div>
  `,
})
export class HeroProfileComponent implements AdComponent, OnInit, OnDestroy {
  @Input() hasDestroy!: ComponentRef<any>
  @Input() data: any;

  ngOnInit() {
    console.log('Iniciando meu componente dinamicamente');
  }

  ngOnDestroy() {
    console.log('Destruindo meu componente dinamicamente');
  }

  destruir() {
    this.hasDestroy.destroy();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
