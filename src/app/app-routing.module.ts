import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NeighbourhoodComponent } from './components/neighbourhood/neighbourhood.component';
const routes: Routes = [

  {path: '', redirectTo: 'neighbourhood', pathMatch:'full'},
  {path: 'neighbourhood', component: NeighbourhoodComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
