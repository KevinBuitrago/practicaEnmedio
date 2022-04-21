import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListArtistasComponent } from './vistas/list-artistas/list-artistas.component';
import {ArtistaComponent} from './vistas/artista/artista.component'

const routes: Routes = [
  { path:'', redirectTo: 'listArtistas', pathMatch: 'full'},
  { path:'listArtistas', component: ListArtistasComponent},
  { path:'artista', component: ArtistaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Modulerouting = [ListArtistasComponent, ArtistaComponent]
