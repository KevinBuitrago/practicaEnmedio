import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListArtistasComponent } from './vistas/list-artistas/list-artistas.component';
import { ArtistaComponent } from './vistas/artista/artista.component';

@NgModule({
  declarations: [
    AppComponent,
    ListArtistasComponent,
    ArtistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
