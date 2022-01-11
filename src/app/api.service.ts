import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  host = 'http://localhost:3000/';
    
  constructor(private http: HttpClient) { 
    
  }
  getBooks(){
    let endpoint = 'books';
    let url = this.host + endpoint;
    return this.http.get<any>(url);
  }
}
