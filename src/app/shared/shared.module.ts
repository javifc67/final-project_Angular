import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteLayoutComponent } from './components/site-layout/site-layout.component';
import { SiteLayoutHeaderComponent } from './components/site-layout-header/site-layout-header.component';
import { SiteLayoutFooterComponent } from './components/site-layout-footer/site-layout-footer.component';
import { RouterModule } from '@angular/router';
import { ClickPreventDefaultDirective } from './directives/click-prevent-default.directive';
import { IfDirective } from './directives/if.directive';
import { ColorizerDirective } from './directives/colorizer.directive';
import { FormComponent } from './components/forms/form.component';
import { FormControlComponent } from './components/forms/form-control.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HeroComponent } from './components/hero/hero.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [
    SiteLayoutComponent,
    SiteLayoutHeaderComponent,
    SiteLayoutFooterComponent,
    ClickPreventDefaultDirective,
    IfDirective,
    ColorizerDirective,
    FormComponent,
    FormControlComponent,
    PageNotFoundComponent,
    HeroComponent,
    InfoComponent
  ],
  imports: [CommonModule, RouterModule, NgZorroAntdModule],
  exports: [
    SiteLayoutComponent,
    SiteLayoutHeaderComponent,
    SiteLayoutFooterComponent,
    ClickPreventDefaultDirective,
    IfDirective,
    ColorizerDirective,
    FormComponent,
    FormControlComponent,
    PageNotFoundComponent,
    HeroComponent,
    InfoComponent
    
  ]
})
export class SharedModule {}
