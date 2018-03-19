import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import {MatModule} from './mat/mat.module';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MediaMatcher} from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    MatModule,
    BrowserAnimationsModule
  ],
  providers: [MediaMatcher],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
