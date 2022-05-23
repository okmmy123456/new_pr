import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-detail-pr-n',
  templateUrl: './detail-pr-n.component.html',
  styleUrls: ['./detail-pr-n.component.css']
})
export class DetailPrNComponent implements OnInit {

  constructor() { }
  @Output("count_com2") count = new EventEmitter<number>()
  @Input() count1 = 0;
  
 
  ngOnInit(): void {
  }

  onCoutDelete1(){
    this.count.emit(-1)
  }
}
