import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudops';
  people = [
    {"id":1001,"pname":"Kiran","gender":"Male","age":20},
    {"id":1002,"pname":"Charan","gender":"Male","age":21},
    {"id":1003,"pname":"Karan","gender":"Male","age":22},
    {"id":1004,"pname":"Madan","gender":"Male","age":23},
    {"id":1005,"pname":"Rathan","gender":"Male","age":24},
  ];
  msg=""
  p:any={};
  constructor(){
    this.msg="People count " +this.people.length;
  }
  getPersonById(id:number){
    var p = JSON.stringify(this.people.find(x=>x.id==id));
    this.p = JSON.parse(p);
  }
  deletePersonById(id:number){
    var index = this.people.findIndex(x=>x.id==id);
    this.people.splice(index,1);
    this.msg="People count "+this.people.length;
  }
  addPerson(){
    this.people.push( this.p);
    this.p={};
    this.msg="People count "+this.people.length;
  }


}
