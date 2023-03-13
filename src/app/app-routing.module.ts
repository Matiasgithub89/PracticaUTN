import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadComponent } from './components/actividad/actividad.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'add-user'},
  {path:'actividad1', component:ActividadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
