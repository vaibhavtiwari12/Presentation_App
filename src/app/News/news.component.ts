import { Component,HostListener,Input } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {UserService} from './news.service';
import {TruncatePipe} from './limitFilter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {RouteDetectorService} from '../route-detector.service'

@Component({
  selector: 'news-page',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [UserService,RouteDetectorService]
  
})
export class NewsComponent {
 constructor(private userService: UserService, private routeService : RouteDetectorService) {
   console.log("get Route pAth ",routeService.getRoutePath());
 }
  newsData :Observable<any>;
  ngOnInit(){
    this.userService.getUser().subscribe(data => {
      console.log(data.articles);
    	this.newsData = data.articles;
    	console.log("this.newsData ",this.newsData);
    
    });
  } 
  ngAfterViewInit(){
       
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.DOMPainter();
  }
  DOMPainter() {
   setTimeout(function(){
      var cardContentHolder = document.getElementsByClassName("card-content-p");
      var newsheading = document.getElementsByClassName("news-heading");
      var cardcontentHeight:number=0;
      var cardheadingHeight:number=0;
      for(var i=0;i<cardContentHolder.length;i++){
         if(cardContentHolder[i].clientHeight>cardcontentHeight){
           cardcontentHeight = cardContentHolder[i].clientHeight;
         }
      }
      for(var i=0;i<newsheading.length;i++){
         if(newsheading[i].clientHeight>cardheadingHeight){
           cardheadingHeight = newsheading[i].clientHeight;
         }
      }
      var css = '.card-content-p {min-height:'+cardcontentHeight+'px !important;} .news-heading {min-height:'+cardheadingHeight+'px !important;}',
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');
      style.type = 'text/css';
      style.appendChild(document.createTextNode(css));
      head.appendChild(style);
    },400); 

  }
}