import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCommonModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTreeModule} from '@angular/material/tree';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { HeaderComponent } from './pr/header/header.component';
import { SidenavComponent } from './pr/sidenav/sidenav.component';
import { HomeComponent } from './pr/home/home.component';
import { PrNHomeComponent } from './pr-nomal/pr-n-home/pr-n-home.component';
import { MainPrNComponent } from './pr-nomal/main-pr-n/main-pr-n.component';
import { DetailPrNComponent } from './pr-nomal/detail-pr-n/detail-pr-n.component';
import { UploadPrNComponent } from './pr-nomal/upload-pr-n/upload-pr-n.component';
import { HeaderPrNComponent } from './pr-nomal/header-pr-n/header-pr-n.component';
import { CommainComponent } from './test/commain/commain.component';
import { Com1Component } from './test/com1/com1.component';
import { Com2Component } from './test/com2/com2.component';
import { Com3Component } from './test/com3/com3.component';
import { LoginComponent } from './login/login.component';
import { CommainhomeComponent } from './commainhome/commainhome.component';
import { HomeCodeProjectComponent } from './pr-code-project/home-code-project/home-code-project.component';
import { CreateCodeProjectComponent } from './pr-code-project/create-code-project/create-code-project.component';
import { EditCodeProjectComponent } from './pr-code-project/edit-code-project/edit-code-project.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    PrNHomeComponent,
    MainPrNComponent,
    DetailPrNComponent,
    UploadPrNComponent,
    HeaderPrNComponent,
    CommainComponent,
    Com1Component,
    Com2Component,
    Com3Component,
    LoginComponent,
    CommainhomeComponent,
    HomeCodeProjectComponent,
    CreateCodeProjectComponent,
    EditCodeProjectComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatTreeModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatSelectModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
