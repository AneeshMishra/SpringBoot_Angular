import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodo(username : string){
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }
  deleteTodo(username: string, id : string){
    return this.http.delete<Todo[]>(`${API_URL}/users/${username}/todos/${id}`);
  }
  retrieveTodoById(username: string, id : number){
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }
  updateTodo(username, id, todo){
    return this.http.put<Todo>(
      `${API_URL}/users/${username}/todos/${id}`,
       todo);
  }
  createTodo(username, todo){
    return this.http.post<Todo>(
      `${API_URL}/users/${username}/todos`,
       todo);
  }
  createBasicAuthenticationHeader(){
    let username ='aneesh';
    let password ='aneesh';
    let basicAuthHeaderString ='Basic'+ window.btoa(username+':'+password);
    return basicAuthHeaderString;
  }
}
