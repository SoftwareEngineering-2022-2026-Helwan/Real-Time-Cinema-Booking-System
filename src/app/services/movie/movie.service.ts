import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
api='http://localhost:8081/api';
base='http://localhost:8081/public/image/';

filter: Subject<string> = new Subject<string>();
search: Subject<string> = new Subject<string>();

constructor(private http:HttpClient, private auth: AuthService) {
 }

 getSlideShow()
 {
    return this.http.get(`${this.api}/movie/slideShow`);
 }

 getMovies(cinemaId?:number){
    return this.http.post(`${this.api}/movie/movies/`,{cinemaId: cinemaId});
 }

}
