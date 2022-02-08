import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor(private httpClient: HttpClient) {
  }
  getUserdata(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');


  }
  /*getStudentdata(){
    return this.httpClient.get('http://localhost:8080/springtest/susmita');

  }
  getEmpdata(){
    return this.httpClient.get('http://localhost:9090/emp');

  }*/

}
