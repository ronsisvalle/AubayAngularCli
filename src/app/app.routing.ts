import {Routes, RouterModule} from '@angular/router';
import {AubayHomePageComponent} from './pages/home/home.component';
import {AubayLoginPageComponent} from './pages/login/login.component';
import {NotFoundComponent} from './pages/notfound/notfound.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AubayHomePageComponent},
  {path: 'login', component: AubayLoginPageComponent},
  {path: '**', component: NotFoundComponent}
];

export const Routing = RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'});
