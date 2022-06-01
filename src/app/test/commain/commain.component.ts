import { Component, forwardRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Com1Component } from '../com1/com1.component';
import { Com2Component } from '../com2/com2.component';
@Component({
  selector: 'app-commain',
  templateUrl: './commain.component.html',
  styleUrls: ['./commain.component.css']
})
export class CommainComponent implements OnInit {

  @ViewChild("c1") c1!: Com1Component;
  @ViewChild("c2") c2!: Com2Component;
  count = 0
  namemain=""
  
  constructor() { 
  }
  
  ngOnInit(): void {
  }
  _onClick(){
    this.count = this.count+1
  }
  com1reset(value : number){
    this.count = value
  }


  onclickRun3(){
    this.c1.count = this.c1.count+1;
    this.c2.count1 = this.c2.count1-1;

  }
  headername(value:string){
    this.namemain=value
    console.log("namemain = ",this.namemain)
  }
}
