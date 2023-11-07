import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  // public baseURL = "http://localhost:9090"

  // constructor(private httpClient : HttpClient)
  // {

  // }

  // getEmployeeList() : Observable<Employee[]>
  // {
  //   return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  // }


}
