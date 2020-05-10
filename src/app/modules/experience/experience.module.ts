import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { ExperienceComponent } from './experience.component';

const routes: Routes = [
  { path: '', component: ExperienceComponent }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [ExperienceComponent]
})
export class ExperienceModule { }
