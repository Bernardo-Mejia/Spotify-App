import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule)
  },
  // {
  //   path: "tracks",
  //   loadChildren: () => import("./modules/tracks/tracks.module").then(m => m.TracksModule)
  // },
  // {
  //   path: "history",
  //   loadChildren: () => import("./modules/history/history.module").then(m => m.HistoryModule)
  // },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
