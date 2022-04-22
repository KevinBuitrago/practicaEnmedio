import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListArtistasComponent } from './vistas/list-artistas/list-artistas.component';
import {ArtistaComponent} from './vistas/artista/artista.component'
import {TracksAlbumsComponent} from './vistas/tracks-albums/tracks-albums.component'

const routes: Routes = [
  { path:'', redirectTo: 'listArtistas', pathMatch: 'full'},
  { path:'listArtistas', component: ListArtistasComponent},
  { path:'artista/:id', component: ArtistaComponent},
  { path:'tracks/:id', component: TracksAlbumsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Modulerouting = [ListArtistasComponent, ArtistaComponent]
