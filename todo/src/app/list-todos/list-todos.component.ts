import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Router } from '@angular/router';

 export class Todo{

  constructor( public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date){
   
  }
  
 }
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
  todos : Todo[];
  message: string;
 
  constructor(private todoservice: TodoDataService,
    private router: Router) { }

  ngOnInit() {
    this.refreshTodos();
  }
  deleteTodo(todo){
    this.todoservice.deleteTodo('aneesh',todo.id).subscribe(
      data =>{
        this.message ='data deleted successfully: '+ todo.id;
        this.refreshTodos();
      }
    )
  }
  refreshTodos(){
    this.todoservice.retrieveAllTodo('aneesh').subscribe(
      data =>{ this.todos= data},
    );
  }
  updateTodo(todo){
    this.router.navigate(['todos',todo.id]);
    
  }
  addTodo(todo){
    this.router.navigate(['todos',-1]);
  }
}
