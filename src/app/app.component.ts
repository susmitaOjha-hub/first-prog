import { Component } from '@angular/core';
import {TestserviceService} from './testservice.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userdata : any;
  studentdata : any;
  Empdata : any;
  constructor(private testserviceService: TestserviceService) {
  }
  ngOnInit() : void {
    this.testserviceService.getUserdata().subscribe(x=>{
      this.userdata= x;})

    /*this.testserviceService.getStudentdata().subscribe(x=>{
        this.studentdata= x;})

    this.testserviceService.getEmpdata().subscribe(x=>{
        this.Empdata= x;})*/

  }
  x:string = '10';
}
