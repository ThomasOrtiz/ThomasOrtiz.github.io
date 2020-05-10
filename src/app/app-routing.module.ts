import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-me', loadChildren: () => import('./modules/about-me/about-me.module').then(m => m.AboutMeModule) },
  { path: 'experience', loadChildren: () => import('./modules/experience/experience.module').then(m => m.ExperienceModule) },
  { path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule) },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
