import { ChangeDetectorRef, Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pr_new';

  mobileQueryMax !: MediaQueryList;

  private _moblieQueryListener :()=> void;

  constructor(CDR:ChangeDetectorRef,media:MediaMatcher){
    this._moblieQueryListener = ()=> CDR.detectChanges();
    this.mobileQueryMax = media.matchMedia('(max-width:600px)');
    this.mobileQueryMax.addEventListener('change', this._moblieQueryListener)
   
  }
  ngOnDestroy(): void {
    this.mobileQueryMax.removeEventListener('change', this._moblieQueryListener)
  }
  onSayhi(text:String){
    //alert(text)
  }
  
  jangtang(){
  
  }
}
