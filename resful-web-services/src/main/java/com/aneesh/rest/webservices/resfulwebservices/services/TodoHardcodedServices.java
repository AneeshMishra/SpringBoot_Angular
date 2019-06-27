package com.aneesh.rest.webservices.resfulwebservices.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.aneesh.rest.webservices.resfulwebservices.model.Todo;

@Service
public class TodoHardcodedServices {
	private static List<Todo> todos = new ArrayList();
	private static long idCounter =0;
	static {
		todos.add(new Todo(++idCounter,"Aneesh","Learn Java 8",new Date(), false));
		todos.add(new Todo(++idCounter,"Kiran","Learn Docker",new Date(), false));
		todos.add(new Todo(++idCounter,"Abhisek","Learn Micro services",new Date(), false));
		todos.add(new Todo(++idCounter,"Jobin","Learn Authintication",new Date(), false));
	}
public List<Todo> findAll(){
	return todos;
}
public Todo deleteById(long id) {
	Todo todo = findById(id);
	if(todo == null) {
		return null;
	}
	if(todos.remove(todo)) {
		return todo;
	}
	return null;
	
}
public Todo findById(long id) {
	// TODO Auto-generated method stub
	for(Todo todo: todos) {
		if(todo.getId() == id) {
			return todo;
		}
	}
	return null;
}
public Todo save(Todo todo) {
	if(todo.getId() == -1 || todo.getId() == 0) {
		todo.setId(++idCounter);
		todos.add(todo);
	} else {
		deleteById(todo.getId());
		todos.add(todo);
	}
	return todo;
}
}
