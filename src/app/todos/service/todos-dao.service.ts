import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoInterface } from '../types/todo-interface';

@Injectable({
  providedIn: 'root'
})
export class TodosDaoService {

  private apiUrl = 'http://localhost:8080/api/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<TodoInterface[]> {
    return this.http.get<TodoInterface[]>(this.apiUrl);
  }

  getTodoById(id: number): Observable<TodoInterface> {
    return this.http.get<TodoInterface>(`${this.apiUrl}/${id}`);
  }

  createTodo(todo: TodoInterface): Observable<TodoInterface> {
    return this.http.post<TodoInterface>(this.apiUrl, todo);
  }

  updateTodo(id: number, todo: TodoInterface): Observable<TodoInterface> {
    return this.http.put<TodoInterface>(`${this.apiUrl}/${id}`, todo);
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
