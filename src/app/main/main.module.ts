import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {IndexComponent} from './index/index.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';

@NgModule({
  declarations: [MainComponent, IndexComponent, ContactComponent, AboutComponent],
  imports: [CommonModule],
})
export class MainModule {}
