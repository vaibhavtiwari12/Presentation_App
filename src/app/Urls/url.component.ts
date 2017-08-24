import { Component } from '@angular/core';

@Component ({
	selector : 'url-page',
	templateUrl : './url.component.html',
	styleUrls : ['./url.component.css']
})
export class UrlComponent {

shouldhide : boolean;
	ngOnInit(){
		this.shouldhide=true;
		console.log("On Init Fired");

	}

/******************************* LIFE CYCLE HOOKS EXAMPLE *****************************************************/
	ngOnChanges(){
		console.log("On Change Fired");
	}
	ngDoCheck(){
		console.log("Do check Called.");
	}
	ngAfterContentInit(){
		console.log("After Content INIT");
	}
	ngAfterContentChecked(){
		console.log("After Content CHECKED");
	}
	ngAfterViewInit(){
		console.log("After View INIT");
	}
	ngAfterViewChecked(){
		console.log("After View CHECKED");
	}
	ngOnDestroy(){
		console.log("After DESTROYER");
	}
/******************************* LIFE CYCLE HOOKS EXAMPLE *****************************************************/
}