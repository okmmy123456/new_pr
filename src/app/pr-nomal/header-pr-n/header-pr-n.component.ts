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
  name :any
  text = '';
  constructor(@Inject(forwardRef(()=>MainPrNComponent)) private main:MainPrNComponent) { 
    
  }
 
 
  ngOnInit(): void {
    
  }
  _onReset(){
    this.onReset.emit(0)
  }
  _onSetName(){
    this.main.namemain = this.name
  }
  onKeyUp(x:any) { // appending the updated value to the variable
    this.name += x.target.value + ' | ';
  }
}
