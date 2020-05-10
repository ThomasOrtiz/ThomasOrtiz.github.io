import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { AboutMeComponent } from './about-me.component';

const routes: Routes = [
  { path: '', component: AboutMeComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [AboutMeComponent]
})
export class AboutMeModule { }
