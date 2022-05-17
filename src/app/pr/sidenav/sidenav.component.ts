import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { asapScheduler } from 'rxjs';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  prmenu1 : string = "> PR"
  menu1 : number = 0;
  menu2 : number = 0;
  menu3 : number = 0;

  ico : string ="navigate_next"
  ico2 : string ="navigate_next"
  ico3 : string ="navigate_next"



  constructor() { 
 
  }

  ngOnInit(): void {
  }

  menuClick1(){
    if(this.menu1==0){
        this.menu1=1
        this.ico="expand_more"
      }else{
        this.menu1=0
        this.ico="navigate_next"
      }
  }

  menuClick2(){
    if(this.menu2==0){
        this.menu2=1
        this.ico2="expand_more"
      }else{
        this.menu2=0
        this.ico2="navigate_next"
      }
  }

  menuClick3(){
    if(this.menu3==0){
        this.menu3=1
        this.ico3="expand_more"
      }else{
        this.menu3=0
        this.ico3="navigate_next"
      }
  }
 
 
}


