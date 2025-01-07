import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private apiUrl = 'http://localhost:8080/api/todos'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  // function to implement get request 
  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
