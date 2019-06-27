package com.aneesh.rest.webservices.resfulwebservices.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.aneesh.rest.webservices.resfulwebservices.model.HelloWorldBean;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloworldController {
	
	@GetMapping(path="/hello-world-bean/{name}")
	public HelloWorldBean helloBean(@PathVariable String name ) {
		if(name == " "|| name ==null) {
			throw new RuntimeException("Some Error come from back end");
		}
		
		return new HelloWorldBean(name);
	}

}
