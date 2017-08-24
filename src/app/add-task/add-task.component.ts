import { Component, OnInit } from '@angular/core';
import { todo } from  '../shared/todo';
import {AngularFireDatabaseModule,AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
	newTask :todo = new todo();
	finalObject : todo = new todo();
	todoListHighestId : number=10;
	userId : string;
	user: Observable<firebase.User>;
	active: boolean = true;
	userList: FirebaseListObservable<any[]>;
	todos: FirebaseListObservable<any[]>;
	todosEdit : FirebaseListObservable<any[]>;
	dbs : any;
    constructor(afAuth: AngularFireAuth, db: AngularFireDatabase , private router : Router) {
    /*------- Authentication Handler ---------*/
     this.dbs = db;
     this.user = afAuth.authState;
      this.user.subscribe ((userState)=>{
        console.log("UserState",userState);
        if(!userState){
          this.router.navigateByUrl('/Login');
         }else {
         	this.userId  = userState.uid;
         } 
	     //this.todos = db.list('todos/'+this.userId);
	     this.todosEdit = db.list("todos/",{preserveSnapshot: true});
	     this.userList = db.list("users/");
	     this.userList.subscribe(snapshots=> {
	     	snapshots.forEach(snapshot => {
	     		console.log(snapshot);
	     	})
	     });
      });

     };

    /*------- Authentication Handler ---------*/
	onSubmit( db: AngularFireDatabase ) {
	
		console.log("New Task",this.newTask);
		//this.todos=db.list("todos/"+this.newTask.userID)
		console.log("Access the DATABASE ------------------------",);
		
		
		this.todosEdit.subscribe(snapshots=> {
			console.log(snapshots,"snapshots");
			snapshots.forEach(snapshot => {
				console.log("snapshot",snapshot.key);
	          	if(snapshot.id){
	          		this.todoListHighestId = snapshot.id;
	          		//console.log("this.todoListHighestId",this.todoListHighestId, snapshot.val().id)
	          	}
	          	else {
	          		this.todoListHighestId = 10;
	          	}
	          	//console.log(this.todosEdit.snapshot.key)
        	});
		});
		this.finalObject = {
			'id' : this.todoListHighestId+1,
			'title' : this.newTask.title,
			'description' :this.newTask.description,
			'status':true,
			'completed' :false,
			'userID':this.newTask.userID
		};
		//this.todosEdit.(this.newTask.userID).push(this.finalObject);
		this.todos=this.dbs.list("todos/"+this.newTask.userID).push(this.finalObject);
		console.log("final OBject",this.finalObject);
		this.newTask = new todo();
		/* To reset the form*/
			this.active=false;
			setTimeout ( ()=> this.active=true,0);
		/* To reset the form*/
	}
}
