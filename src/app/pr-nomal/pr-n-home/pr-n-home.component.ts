import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { pr } from 'src/app/models/pr.models';


@Component({
  selector: 'app-pr-n-home',
  templateUrl: './pr-n-home.component.html',
  styleUrls: ['./pr-n-home.component.css']
})
export class PrNHomeComponent implements OnInit {
  displayedColumns = ['site','section','remark','name', 'sum', 'hname','status', 'action']
  dataSource = new MatTableDataSource<pr>();

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
    const dummy: pr[] = [
      {
        site : 'ss' ,
        section : 'c10',
        deptcode : '07294',
        name : 'jakraphan',
        hname : 'supachai',
        prno : 321867892232154,
    
       select4: 1,
        
        descliption : 'cpu',
        qty : 1,
        unit : 'ea',
        price : 8590,
        sum :8590,
        required : "2019-01-16",
        supplier : null,
        assetno : null,
        
        
        over1y : 1,

    
        totalall : 8590,
        sagunmonny : 'bath',
        remark : 'ต้องการซื้อ cpu ใหม่ cpu เก่าพัง',
    
        status : 'Anumut',
        type : 'pr',
        file : null,
      },
    /*  {
        deptcode: 'C11',
        name: 'jakraphan',
        price: 1000,
        descliption: 'Esse quos tempore consequatur incidunt repellendus rerum soluta incidunt. Consequuntur et et dolore asperiores repellat reprehenderit sint qui aut. Molestias tempora perferendis architecto velit eum quia explicabo alias. Possimus cum eos magnam earum praesentium qui quaerat voluptatem. Ratione dolorem voluptas accusamus cupiditate perferendis aut ut. Modi veniam voluptatum quia repellendus est.',
        hname: 'Supachai',
        status: 'yungmaianumut'
      },
      {
        deptcode: 'C12',
        name: 'Jada',
        price: 500,
        descliption: 'Schneider, Fritsch and Ebert',
        hname: 'supachai',
        status: 'A nu mut'
      },
      {
        deptcode: 'C13',
        name: 'Lea Goodwin',
        price: 2500,
        descliption: 'Principal',
        hname: 'supachai',
        status: 'A nu mut'
      },
      {
        deptcode: 'C14',
        name: 'Moses Wehner',
        price: 600,
        descliption: 'Regional',
        hname: 'supachai',
        status: 'A nu mut'
      },
      {
        deptcode: 'C15',
        name: 'Valentina Gracielaa',
        price: 950,
        descliption: 'International',
        hname: 'supachai',
        status: 'A nu mut'
      },
      {
        deptcode: 'C16',
        name: 'Macy Nikolaus',
        price: 500,
        descliption: 'District',
        hname: 'supachai',
        status: 'A nu mut'
      },*/
      
      

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
