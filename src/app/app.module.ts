import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatProgressSpinnerModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {AubayImgLoaderComponent} from './components/aubay-img-loader/img-loader.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NotFoundComponent} from './pages/notfound/notfound.component';
import {AubayHomePageComponent} from './pages/home/home.component';
import {AubayCardComponent} from './components/aubay-card/card.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AubayLoginPageComponent} from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AubayHomePageComponent,
    AubayLoginPageComponent,
    NotFoundComponent,
    AubayCardComponent,
    AubayImgLoaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    Routing,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
