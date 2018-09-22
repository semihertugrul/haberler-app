import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HaberComponent } from "./haber/haber.component";
import { HaberDetayComponent } from "./haber-detay/haber-detay.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: '/Haberler',
    pathMatch: 'full'
  },
  {
    path: "Haberler",
    component: HaberComponent
  },
  {
    path: "HaberDetay/:id",
    component: HaberDetayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {}
}
