import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { codeprojectResponse } from '../models/codeproject.models';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private httpClient: HttpClient) { }
  getcodeproject() : Observable<codeprojectResponse[]>{
    return this.httpClient.get<codeprojectResponse[]>('http://localhost:1150/codeproject');
   }
}
