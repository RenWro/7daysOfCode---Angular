import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeModule } from './components/pages/home/home.module';
import { FilmsModule } from './components/pages/films/films.module';
import { SearchModule } from './components/pages/search/search.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    FilmsModule,
    // SearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
