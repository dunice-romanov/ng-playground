import { NgModule, Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { UserService } from './_services/user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  providers: [ UserService ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded');
    }
  }
}
