import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
id : number;
todo: Todo;
  constructor(
    private todoService: TodoDataService,
    private activateRout: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // this.todoservice.deleteTodo('aneesh',todo.id).subscribe(
    //   data =>{
    //     this.message ='data deleted successfully: '+ todo.id;
    //     this.refreshTodos();
    //   }
    // )
    this.todo = new Todo(1,'',  false,new Date());
    this.id = this.activateRout.snapshot.params['id'];
    if(this.id != -1){
      this.todoService.retrieveTodoById('aneesh',this.id).subscribe(
        data =>{
          this.todo= data;
        }
      );
    }
  
  }
  saveTodo(){
    if(this.id === -1){
this.todoService.createTodo('aneesh', this.todo).subscribe(
  data =>{
    this.router.navigate(['todos']);
  }
);
    } else {
      this.todoService.updateTodo('aneesh', this.id, this.todo).subscribe(
        data =>{
          this.router.navigate(['todos']);
        }
      );
    }
    
  }
}
