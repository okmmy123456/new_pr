import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input("mediaQuery") mobileQueryMax !: boolean;
  @Output() navToggle = new EventEmitter();
  @Output("namFang") sayhi = new EventEmitter<String>();

  demoMailNoti = 50;
  demoNoti = 20;
  
  constructor() { }

  ngOnInit(): void {
  }
  onClickNavToggle(){
    this.navToggle.emit();
    this.sayhi.emit("beby to mom");
  }
}
