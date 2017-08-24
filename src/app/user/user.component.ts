import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string='this will be overridden in init';//will be overridden
  age:number;
  hobbies:string[];
  email:string;
  gender:string;
address:Address;


  constructor() { 
console.log('constructor ran');
  }

  ngOnInit() {
    console.log('ngOnInit ran');
    this.name="John Snow";
    this.age=30;
    this.hobbies=['ruling','fighting','archery'];
    this.email="jonsnow@winterfell.com";
    this.gender="male";
    this.address={
      street:'north',
      city:"wall",
      state:"Westros"
    }
   

    }

    deleteHobby(hobby){
      console.log(hobby);
      for (let i=0;i<this.hobbies.length;i++){
        if(this.hobbies[i]==hobby){
          this.hobbies.splice(i,1);
        }
      }
    }

    onClick(){
      console.log("hi mehtid");
      this.name="king in the north";
      this.hobbies.push('Sword Fighting');
          }

    addHobby(hobbe){
      console.log(hobbe);
      this.hobbies.unshift(hobbe);
      return false;
    }
}



interface Address{
  street:string;
  city:string;
  state:string;
}