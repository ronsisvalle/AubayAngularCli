import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatProgressSpinnerModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {AubayImgLoaderComponent} from './components/aubay-img-loader/img-loader.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NotFoundComponent} from './pages/notfound/notfound.component';
import {Routing} from '../app.routing';
import {AubayHomePageComponent} from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AubayHomePageComponent,
    NotFoundComponent,
    AubayImgLoaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    Routing,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
