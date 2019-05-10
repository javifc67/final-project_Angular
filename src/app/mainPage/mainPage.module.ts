import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MainContentComponent } from './components/home/main-content.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainPageComponent } from './components/mainPage/mainPage.component';
import { RouterModule } from '@angular/router';
import { MainPageRoutingModule } from './mainPage-routing.module';
import { facebookComponent } from './components/facebook/facebook.component';
import { profileComponent } from './components/profile/profile.component';
import { NgxsModule } from '@ngxs/store';
import { MainState } from './store/mainPage.state';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';
import { twitterHomeComponent } from './components/tuitterHome/twitterHome.component';
import { tweetComponent } from './components/tweet/tweet.component';
import { userTwitterComponent } from './components/userTwitter/userTwitter.component';
import { fbPostComponent } from './components/fcPost/fbPost.component';



@NgModule({
  declarations: [
    MainContentComponent,
    MainFooterComponent,
    MainHeaderComponent,
    MainPageComponent,
    facebookComponent,
    profileComponent,
    twitterHomeComponent,
    tweetComponent,
    userTwitterComponent,
    fbPostComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    RouterModule,
    MainPageRoutingModule,
    AuthModule,
    FormsModule,
    NgxsModule.forFeature([MainState])],

    providers: [
      
    ],
})
export class MainPageModule {}
