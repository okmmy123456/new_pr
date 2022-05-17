import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrNHomeComponent } from './pr/pr-nomal/pr-n-home/pr-n-home.component';

const routes: Routes = [
  {path:'home',component:PrNHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
