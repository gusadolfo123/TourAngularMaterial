import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {IndexComponent} from './index/index.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {MainRoutingModule} from './main-routing.module';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [MainComponent, IndexComponent, ContactComponent, AboutComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule, MatButtonModule],
})
export class MainModule {}
