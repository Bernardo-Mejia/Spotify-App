import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';

const routes: Routes = [
  {
    path:"",
    component:TracksPageComponent,
    // El outlet es para indicarle qué routerOutlet cargará con ese nombre
    // outlet:"child"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule { }
