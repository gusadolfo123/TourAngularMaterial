import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {MaterialModule} from '../material.module';
import {RouterModule} from '@angular/router';
import {SliderComponent} from './slider/slider.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchComponent} from './search/search.component';
import {CardSiteComponent} from '../main/index/card-site/card-site.component';
import {CardPackageComponent} from '../main/index/card-package/card-package.component';
import {LightboxModule} from 'ngx-lightbox';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    SearchComponent,
    CardSiteComponent,
    CardPackageComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    SearchComponent,
    CardSiteComponent,
    CardPackageComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule, FormsModule, ReactiveFormsModule, LightboxModule],
})
export class SharedModule {}
