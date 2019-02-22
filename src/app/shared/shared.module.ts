import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {MaterialModule} from '../material.module';
import {RouterModule} from '@angular/router';
import {SliderComponent} from './slider/slider.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchComponent} from './search/search.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, SliderComponent, SearchComponent],
  exports: [NavbarComponent, FooterComponent, SliderComponent, SearchComponent],
  imports: [CommonModule, MaterialModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
