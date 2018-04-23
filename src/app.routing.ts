import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './app/pages/notfound/notfound.component';
import {AubayHomePageComponent} from './app/pages/home/home.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AubayHomePageComponent},
  {path: '**', component: NotFoundComponent}
];

export const Routing = RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'});

