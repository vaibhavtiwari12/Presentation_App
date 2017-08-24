import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor (
    private http: Http
  ) {}

  getUser() {
    return this.http.get(`https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=3e4e06cfc52f48089128fa81dda01fcb`)
    .map((res:Response) => res.json());
  }
  
}