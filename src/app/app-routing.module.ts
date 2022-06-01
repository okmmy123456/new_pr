import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrNHomeComponent } from './pr-nomal/pr-n-home/pr-n-home.component';
import { MainPrNComponent } from './pr-nomal/main-pr-n/main-pr-n.component';
import {CommainComponent} from './test/commain/commain.component';

import {HomeCodeProjectComponent} from './pr-code-project/home-code-project/home-code-project.component';
import {CreateCodeProjectComponent} from './pr-code-project/create-code-project/create-code-project.component';
const routes: Routes = [
  {path:'pr/home-n',component:PrNHomeComponent},
  {path:'pr/home-n/add',component:MainPrNComponent},
  {path:'pr/test',component:CommainComponent},
  {path:'mastar/code-project-home',component:HomeCodeProjectComponent},
  {path:'mastar/code-project-home/create-code-project-home',component:CreateCodeProjectComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
