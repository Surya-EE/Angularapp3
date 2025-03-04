import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  terms:boolean=false;
  
  gender:string='';

  fruits=['Apple','Banana','Cherry'];
  vegetables=['Onion','Tomoatoe','Cbbage'];

  items:string[]=[];
  heading=''
  msg=''
  msg1=''
  
  getItems(p:string){
    if (p==='fruits'){
      this.heading='List of fruits';
      this.items=['Apple','Banana','Cherry'];
      this.msg='Count of fruits ' +this.items.length;
    }else if (p==='vegetables'){

      this.heading='List of Vegetables';
      this.items=['Onion','Tomoatoe','Cabbage'];
      this.msg='Count of vegetables ' +this.items.length;
   
    }
  }

  fullName:string[]=[
    'Travis Head',
    'Steven Smith',
    'Rohit Sharma',
    'Virat Kohli'
  ];

  direction:number=0;
  country:string='';

  title="app works";
  fruits1=["apple","banana","cherry","mango"];

  getHour(){
    return new Date().getHours();
  }
  constructor(){}
  ngOnInit(){}

  operations=['Create','Retrieve','Update','Delete'];

  fruits2:string[]=["banana","apple","cherry","mango"];
  msg2:string="";
  Select(i:number){
    this.msg2=this.fruits2[i];
  }
  people = [
    {"id":1001,"pname":"Kiran","gender":"Male","age":20},
    {"id":1002,"pname":"Charan","gender":"Male","age":21},
    {"id":1003,"pname":"Karan","gender":"Male","age":22},
    {"id":1004,"pname":"Madan","gender":"Male","age":23},
    {"id":1005,"pname":"Rathan","gender":"Male","age":24},
  ];
  p:any={};
  getPersonById(id:number){
    this.p = this.people.find(x=>x.id==id);
  }



}
