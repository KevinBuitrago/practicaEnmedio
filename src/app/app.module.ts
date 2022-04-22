import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppRoutingModule, Modulerouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { TracksAlbumsComponent } from './vistas/tracks-albums/tracks-albums.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    Modulerouting,
    FooterComponent,
    TracksAlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
