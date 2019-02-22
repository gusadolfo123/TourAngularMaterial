import {Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';

export const MainRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
];
