import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './componants/add/add.component';
import { DetailsComponent } from './componants/details/details.component';
import { ErrorComponent } from './componants/error/error.component';
import { HomeComponent } from './componants/home/home.component';
import { UpdateComponent } from './componants/update/update.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'students',component:HomeComponent},
  {path:'students/:id',component:DetailsComponent},
  {path:'add',component:AddComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'**',component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
