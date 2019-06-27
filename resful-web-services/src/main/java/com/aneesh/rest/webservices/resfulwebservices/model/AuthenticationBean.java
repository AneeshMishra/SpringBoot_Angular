package com.aneesh.rest.webservices.resfulwebservices.model;

public class AuthenticationBean {
	private String message;

	AuthenticationBean(){
		
	}
		public AuthenticationBean(String message){
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
