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
  menutest : number = 0;
  menu0 : number = 0;
  menu1 : number = 0;
  menu2 : number = 0;
  menu3 : number = 0;
  menu4 : number = 0;

  icotest : string ="navigate_next"
  ico0 : string ="navigate_next"
  ico1 : string ="navigate_next"
  ico2 : string ="navigate_next"
  ico3 : string ="navigate_next"
  ico4 : string ="navigate_next"

  btntest = false


  constructor() { 
 
  }
  ngOnInit(): void {
    
  }
  menutestbtn(){
    if(this.btntest == false){
      this.btntest=true
    }else{
      this.btntest = false
    }
  }
  menuClick0(){
    if(this.menu0==0){
        this.menu0=1
        this.ico0="expand_more"
      }else{
        this.menu0=0
        this.ico0="navigate_next"
      }
     
  }
  menuClick1(){
    if(this.menu1==0){
        this.menu1=1
        this.ico1="expand_more"
      }else{
        this.menu1=0
        this.ico1="navigate_next"
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

  menuClick4(){
    if(this.menu4==0){
        this.menu4=1
        this.ico4="expand_more"
      }else{
        this.menu4=0
        this.ico4="navigate_next"
      }
  }
  menuClicktest(){
    if(this.menutest==0){
        this.menutest=1
        this.icotest="expand_more"
      }else{
        this.menutest=0
        this.icotest="navigate_next"
      }
  }
}


