import { Component } from '@angular/core';
import { todo } from '../Shared/todo';
import {AngularFireDatabaseModule,AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { Router} from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl:'./home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent {
    todoLength:number=0;
    user: Observable<firebase.User>;
	  todos: FirebaseListObservable<any[]>;
    todosForData : FirebaseListObservable<any[]>;
    userstate : string;
   //todosCompleted : FirebaseListObservable<any[]>;
    constructor(afAuth: AngularFireAuth, db: AngularFireDatabase , private router : Router) {
      /*Angular Fire State Management*/
      this.user = afAuth.authState;
      this.user.subscribe ((userState)=>{
        console.log("UserState",userState);
        if(!userState){
          this.router.navigateByUrl('/Login');
         }else{
            this.userstate = userState.uid;
         }
          console.log("User ID",this.userstate);
          this.todos = db.list('todos/'+this.userstate).map((arr) => arr.reverse()) as FirebaseListObservable<any[]>
          this.todos.subscribe(todoData => {
            console.log("data -todoData",todoData);
          })
          this.todosForData = db.list('todos/'+this.userstate,{ preserveSnapshot: true});
          this.todosForData.subscribe(snapshots=>{
          snapshots.forEach(snapshot => {
          if(snapshot.val().completed){
            this.todoLength++;
          }
          });
          console.log(this.todoLength);
      });         
      });
      /*Angular Fire State Management*/
    }
    Send(index :number,key :string) {
     // this.items.push({ message: desc});
      //this.msgVal = '';
      console.log("index ",index);
      console.log("key",key);
      this.todos.update(key,{completed :true});
    }
}