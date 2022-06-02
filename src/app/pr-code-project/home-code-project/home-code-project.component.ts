import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { codeproject } from 'src/app/models/codeproject.models';
@Component({
  selector: 'app-home-code-project',
  templateUrl: './home-code-project.component.html',
  styleUrls: ['./home-code-project.component.css']
})
export class HomeCodeProjectComponent implements OnInit {

  displayedColumns = [ 'username','name','site','dept','name', 'tel','action']
  dataSource = new MatTableDataSource<codeproject>();

  @ViewChild(MatSort, { static: true }) sort !: MatSort
  @ViewChild(MatPaginator, {static :true }) paginator!:MatPaginator

  textSearch !: String;
  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
    this.feedData();
  }

  feedData() {
    const dummy: codeproject[] = [
      {
      "username" : "asdzxcqw",
      "pass" : "aszx;.,qwe",
      "name" :"jakraphan traimanee",
      "site" :"ss",
      "dept" :"it",
      "operation" : "jameborn",
      "position" :"undercover",
      "tel" : 3188,
      "email" : "eiyangwa@gmail.com",
      "buyercode" : "a007z"
    },
    {
      "username" : "hjerdffqwe",
      "pass" : "adzxczxcasd",
      "name" :"john cena",
      "site" :"wwe",
      "dept" :"aew",
      "operation" : "wwe",
      "position" :"champion",
      "tel" : 1112,
      "email" : "johncena@gmail.com",
      "buyercode" : "axc1g"
    },
    {
      "username" : "qrvdsfasf",
      "pass" : "aschefzf",
      "name" :"the rock",
      "site" :"wwe",
      "dept" :"aew",
      "operation" : "wwe",
      "position" :"champion",
      "tel" : 1150,
      "email" : "therock@gmail.com",
      "buyercode" : "xe2sd"
    }
  ]
    this.dataSource.data = dummy
  }

  search(event: Event | null) {
    let fliterValue = '';
    if (event) {
      fliterValue = (event.target as HTMLInputElement).value;
    }
    this.dataSource.filter = fliterValue.trim().toLowerCase();
  }


  clearSearch() {
    this.textSearch = '';
    this.search(null)
  }
 

}
