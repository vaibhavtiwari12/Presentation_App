import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
@Injectable()
export class RouteDetectorService {

  constructor(private router : Router) { 
  		
	
}
getRoutePath(){
	return this.router.routerState;
}
}
