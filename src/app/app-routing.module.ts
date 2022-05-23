import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrNHomeComponent } from './pr-nomal/pr-n-home/pr-n-home.component';
import { MainPrNComponent } from './pr-nomal/main-pr-n/main-pr-n.component';

const routes: Routes = [
  {path:'pr/home-n',component:PrNHomeComponent},
  {path:'pr/home-n/add',component:MainPrNComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
