import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details.component';
import { FilmsComponent } from './components/films.component';
import { AppRouteModule } from './approute.module';
import { HttpClientModule } from '@angular/common/http';
import { SakilaService } from './sakila.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    FilmsComponent
  ],
  imports: [
    BrowserModule, AppRouteModule, HttpClientModule
  ],
  providers: [SakilaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
