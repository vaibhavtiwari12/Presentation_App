import {Component} from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
@Component({
	selector:'header-page',
	templateUrl : './header.component.html',
	styleUrls : ['./header.component.css']
})
export class HeaderComponent {
	user:Observable<firebase.User>;
	showLogin : boolean;
  username : string = "user";
	constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    this.user.subscribe(authdata => {
      //console.log("Show LOgin ",authdata.displayName);
      this.username = authdata.displayName;
    	if(authdata){this.showLogin=false;}else{this.showLogin=true;}
    	console.log("Show LOGIN ============= ",this.showLogin);
    })
  }
  logout() {
    this.showLogin=true;
     this.afAuth.auth.signOut();
  }
}