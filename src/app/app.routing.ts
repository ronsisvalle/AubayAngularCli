import {Routes, RouterModule} from '@angular/router';
import {AubayHomePageComponent} from './pages/home/home.component';
import {AubayLoginPageComponent} from './pages/login/login.component';
import {NotFoundComponent} from './pages/notfound/notfound.component';
import {CanActivateViaAuthGuard} from './service/guard/can-activate-via-auth.guard';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component: AubayHomePageComponent, canActivate: [CanActivateViaAuthGuard]},
  {path: 'login', component: AubayLoginPageComponent},
  {path: '**', component: NotFoundComponent}
];

export const Routing = RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'});
