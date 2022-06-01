import { Component, EventEmitter, forwardRef, Inject, Input, OnInit, Output } from '@angular/core';
import { MainPrNComponent } from '../main-pr-n/main-pr-n.component';

@Component({
  selector: 'app-header-pr-n',
  templateUrl: './header-pr-n.component.html',
  styleUrls: ['./header-pr-n.component.css']
})
export class HeaderPrNComponent implements OnInit {
  @Input("count_hear1") count =1;
  @Output() onReset = new EventEmitter<number>()
  @Output() fname = new EventEmitter<string>()
  name =""
  name1 = ""
  text = '';
  constructor(@Inject(forwardRef(()=>MainPrNComponent)) private main:MainPrNComponent) { 
    
  }
 
 
  ngOnInit(): void {
    
  }
  _onReset(){
    this.onReset.emit(0)
  }
  _onSetName(){
 alert(this.name)
  }
  onKeyUpname(x:any) { // appending the updated value to the variable
   /* this.name += x.target.value ;
    this.main.namemain = this.name*/
    this.text += x.target.value;
    this.fname.emit(this.name)
    console.log("name1 = ",this.name)
  }
  onKeyUpname1(x:any) { // appending the updated value to the variable
     this.text += x.target.value;
     console.log("name1 = ",this.name1)
   }
}
