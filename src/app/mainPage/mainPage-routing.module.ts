import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/mainPage/mainPage.component';
import { MainContentComponent } from './components/home/main-content.component';
import { AuthGuard } from '../auth/services/auth.guard';
import { profileComponent } from './components/profile/profile.component';
import { facebookComponent } from './components/facebook/facebook.component';
import { twitterHomeComponent } from './components/tuitterHome/twitterHome.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'twitter/home',
        component: twitterHomeComponent
      
  },
  {
    path: 'profile',
    component: profileComponent
  },
  {
    path: 'facebook',
    component: facebookComponent
  },
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {}
