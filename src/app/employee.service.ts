import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { IEmployee } from './IEmployee'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string = "./assets/data/employees.json";
  constructor(private _http: HttpClient) { }
  getEmployees () : Observable<IEmployee[]> {
    return this._http
              .get<IEmployee[]>(this._url);
  }

}
