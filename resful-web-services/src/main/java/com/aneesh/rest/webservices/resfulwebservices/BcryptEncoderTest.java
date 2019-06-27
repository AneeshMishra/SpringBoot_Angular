package com.aneesh.rest.webservices.resfulwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
String encodedpassword= encoder.encode("password@123");
System.out.println("encodded password "+encodedpassword);
	}

}
