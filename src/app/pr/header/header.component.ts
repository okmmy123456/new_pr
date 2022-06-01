import { Component, EventEmitter, forwardRef, Inject, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

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
  
  constructor(@Inject(forwardRef(()=>AppComponent)) private main:AppComponent) { }

  ngOnInit(): void {
  }
  onClickNavToggle(){
    this.navToggle.emit();
    this.sayhi.emit("beby to mom");
  }
  onLogout(){
    this.main.activateLogin = false
  }
}
