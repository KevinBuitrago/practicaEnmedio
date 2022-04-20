import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListArtistasComponent } from './vistas/list-artistas/list-artistas.component';

const routes: Routes = [
  { path:'', redirectTo: 'listArtistas', pathMatch: 'full'},
  { path:'listArtistas', component: ListArtistasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
