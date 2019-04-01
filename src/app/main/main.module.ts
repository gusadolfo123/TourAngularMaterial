import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {IndexComponent} from './index/index.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {MainRoutingModule} from './main-routing.module';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {PromotionComponent} from './index/promotion/promotion.component';
import {PlacesComponent} from './places/places.component';
import {DetailComponent} from './places/detail/detail.component';
import {CardPlaceComponent} from './places/card-place/card-place.component';

import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    MainComponent,
    IndexComponent,
    ContactComponent,
    AboutComponent,
    PromotionComponent,
    PlacesComponent,
    DetailComponent,
    CardPlaceComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyApBgJo8r9ibGmrlUFCrlEI1HY1eM66Vi0'}),
  ],
})
export class MainModule {}
