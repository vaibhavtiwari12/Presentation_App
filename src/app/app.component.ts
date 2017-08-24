import { Component } from '@angular/core';
import {AngularFireDatabaseModule,AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase/app'
import { PipeTransform, Pipe } from '@angular/core';
import {todo} from './Shared/todo'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	name:string ="vaibhav";
	
  }
