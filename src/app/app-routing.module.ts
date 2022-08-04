import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';

const home: Route = {
  path: '',
  pathMatch: 'full',
  loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule),
}

const notFound: Route = {
  path: '**',
  loadChildren: () => import('./pages/not-found/not-found.module').then(mod => mod.NotFoundModule),
}

const routes: Routes = [
  home,
  notFound,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
