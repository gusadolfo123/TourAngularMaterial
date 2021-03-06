import {Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PlacesComponent} from './places/places.component';
import {DetailComponent} from './places/detail/detail.component';

export const MainRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'places', component: PlacesComponent},
  {path: 'places/:name', component: DetailComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
];
