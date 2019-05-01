import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from '../shared/components/site-layout/site-layout.component';
import { registerComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: 'register',
        component: registerComponent

      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class RegisterRoutingModule {}
