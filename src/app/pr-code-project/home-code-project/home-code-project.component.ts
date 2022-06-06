import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { codeproject, codeprojectResponse } from 'src/app/models/codeproject.models';
import { NetworkService } from 'src/app/services/network.service';
@Component({
  selector: 'app-home-code-project',
  templateUrl: './home-code-project.component.html',
  styleUrls: ['./home-code-project.component.css']
})
export class HomeCodeProjectComponent implements OnInit {

  displayedColumns = [ 'username','name','site','dept', 'tel','action']
  dataSource = new MatTableDataSource<codeproject>();
  dataDB !: codeprojectResponse[]
  @ViewChild(MatSort, { static: true }) sort !: MatSort
  @ViewChild(MatPaginator, {static :true }) paginator!:MatPaginator

  textSearch !: String;
  constructor(private networkServices:NetworkService) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
    this.feedData();
  }

  feedData() {
    this.networkServices.getcodeproject()
      .subscribe(
        data => {
          //alert(JSON.stringify(data))
         // console.log("data = ",JSON.stringify(data))
         // this.dataDB = data
          this.dataSource.data = data
        },
        error=>{
          alert(JSON.stringify("Error : "+error.error.message))
        },
        ()=>{
          console.log("feedData success")
        }
        
      )
     
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
