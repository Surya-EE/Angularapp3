import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent{
  url='http://localhost:5269/api/employees/';
  employees:Employee[] = new Array<Employee>();
  constructor(private _http:HttpClient){
    this._http.get<Employee[]>(this.url)
      .subscribe(response=>this.employees=response);
  }
  e= new Employee();
  getById(id:number){
    this._http.get<Employee>(this.url+id)
      .subscribe(x=>this.e=x);
  }
  msg:string='';
  deleteById(id:number){
    this._http.delete(this.url+id)
      .subscribe(()=>this.msg='Row deleted successfully...');
  }
  updateEmployee(){
    this._http.put(this.url+this.e.id, this.e  ,{
     headers:new HttpHeaders({
       'Content-Type':'application/json'
     })  	
 }).subscribe(()=>this.msg="Row edited successfully..."); 
 }

  addEmployee(){	
    this._http.post(this.url,this.e,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }).subscribe(()=>this.msg="Row added successfully...");
  }

}

class Employee{
  id:number=0
  ename:string=''
  job:string=''
  salary:number=0
}















