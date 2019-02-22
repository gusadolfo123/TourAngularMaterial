import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {MainRoutes} from './main.routes';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: MainRoutes,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
