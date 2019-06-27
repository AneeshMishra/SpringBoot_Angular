package com.aneesh.rest.webservices.resfulwebservices.model;

public class HelloWorldBean {
	
	private String message;

	HelloWorldBean(){
		
	}
		public HelloWorldBean(String message){
		this.message= message;
	}
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "HelloWorldBean [message=" + message + "]";
	}
	

}
