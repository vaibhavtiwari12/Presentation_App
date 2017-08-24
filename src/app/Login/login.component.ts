import { Component} from '@angular/core';
import {AngularFireDatabaseModule,AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  user: Observable<firebase.User>;
  userDataList :FirebaseListObservable<any[]>;
  userDataListEmulation:FirebaseListObservable<any[]>;
  userID : string;
  userName : string;
  flag:string="no";
  constructor(public afAuth: AngularFireAuth, private router : Router,db: AngularFireDatabase) {
    this.user = afAuth.authState;
    this.userDataList = db.list("users/");
    this.userDataListEmulation = db.list("users/");
  }
  ngOnInit(){
     this.userDataList.subscribe(
      (snapshots) => {
          snapshots.forEach(snapshot=>{
            if(this.userID == snapshot.id){
              this.flag="yes";
            }       
          })
    },(err)=>{
    },()=>{
    });
  }
  login() {
    let userObject;
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((success)=>{

    	this.user.subscribe(data => {
        this.userID = data.uid;
        this.userName = data.displayName;
        this.router.navigateByUrl('/');
         if(this.flag=="no")
          userObject = {
             id : this.userID,
             userName : this.userName
          }
          this.userDataListEmulation.push(userObject);
          
    })
    }).catch((error)=>{
    });
  }
  logout() {
     this.afAuth.auth.signOut();
  }
}
