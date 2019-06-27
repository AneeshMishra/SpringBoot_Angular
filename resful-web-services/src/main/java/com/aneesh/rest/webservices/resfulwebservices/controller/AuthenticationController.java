package com.aneesh.rest.webservices.resfulwebservices.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aneesh.rest.webservices.resfulwebservices.model.AuthenticationBean;


@CrossOrigin(origins="http://localhost:4200")
@RestController
//@RequestMapping("/auth")
public class AuthenticationController {
	
	@GetMapping(path="/authenticate")
	public AuthenticationBean authenticate()  {
//		if(name == " "|| name ==null) {
//			throw new RuntimeException("Some Error come from back end");
//		}
		
		return new AuthenticationBean("Login Success");
	}

}
