import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [SharedModule, RouterModule],
  exports: [NavComponent, PageNotFoundComponent],
  declarations: [NavComponent, PageNotFoundComponent],
  providers: [],
})
export class CoreModule { }
