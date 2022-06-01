import { Component, forwardRef, Inject, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from 'src/app/pr/header/header.component';
import { DetailPrNComponent } from '../detail-pr-n/detail-pr-n.component';
import { HeaderPrNComponent } from '../header-pr-n/header-pr-n.component';

@Component({
  selector: 'app-main-pr-n',
  templateUrl: './main-pr-n.component.html',
  styleUrls: ['./main-pr-n.component.css']
})
export class MainPrNComponent implements OnInit {
  @ViewChild("c1") c1!: HeaderPrNComponent;
  @ViewChild("c2") c2!: DetailPrNComponent;
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
    //this.c1.count = this.c1.count+1;
   // this.c2.count1 = this.c2.count1-1;

  }
  headername(value:string){
    this.namemain=value
  }
}
