import {Component} from '@angular/core';

@Component({
	template: `
		<div class="flex justify-center align-center flex-dir-column">
			<h1>404</h1>
			<p>Page you are looking for does not exist.</p>
			<a routerLink="/">Go To HomePage</a>
		</div>
	`
})
export class NotFoundComponent {}