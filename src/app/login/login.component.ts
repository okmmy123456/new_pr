import { Component, EventEmitter, forwardRef, Inject, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  activate1 = true;
  constructor(@Inject(forwardRef(()=>AppComponent)) private main:AppComponent) { }

  ngOnInit(): void {
  }
  onChange(valid:boolean){
    this.activate1 = valid
  }
  onLogin(){
    this.main.activateLogin = true
  }
}