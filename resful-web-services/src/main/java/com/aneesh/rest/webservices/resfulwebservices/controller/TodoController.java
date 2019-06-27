package com.aneesh.rest.webservices.resfulwebservices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.aneesh.rest.webservices.resfulwebservices.model.Todo;
import com.aneesh.rest.webservices.resfulwebservices.repository.TodoJpaRepository;
import com.aneesh.rest.webservices.resfulwebservices.services.TodoHardcodedServices;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TodoController {

	@Autowired
	private TodoHardcodedServices todoHardcodedServices;
	@Autowired
	private TodoJpaRepository todoJpaRepository;
	
	 public void addCorsMappings(CorsRegistry registry) {
	       // super.addCorsMappings(registry);
	        registry.addMapping("/**")
	                .allowedOrigins("http://localhost:4200", "http://localhost:8080")
	                .allowedMethods("GET", "PUT", "POST", "DELETE", "OPTIONS");
	    }
	

	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		System.out.println(username+ "user name: "+todoJpaRepository.findByUsername(username));
		return todoJpaRepository.findByUsername(username);
		//return todoHardcodedServices.findAll();
	}
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username,
			@PathVariable long id){
		todoJpaRepository.deleteById(id);
//		Todo todo =todoHardcodedServices.deleteById(id);
//		if(todo != null) {
//			return ResponseEntity.noContent().build();
//		}
		return ResponseEntity.noContent().build();
	}
	@GetMapping("/users/{username}/todos/{id}")
	public Todo getByTodos(@PathVariable long id){
		return todoJpaRepository.findById(id).get();
		//return todoHardcodedServices.findById(id);
	}
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(
			@PathVariable String username,
			@PathVariable long id,
			@RequestBody Todo todo){
		Todo todoupdated =todoJpaRepository.save(todo);
		
		return new ResponseEntity<Todo>(todoupdated, HttpStatus.OK);
	}
	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Todo> saveTodo(
			@PathVariable String username,
			@PathVariable long id,
			@RequestBody Todo todo){
		Todo createdTodo =todoJpaRepository.save(todo);
	// ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		return  ResponseEntity.created(ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri()).build();
	}
}
