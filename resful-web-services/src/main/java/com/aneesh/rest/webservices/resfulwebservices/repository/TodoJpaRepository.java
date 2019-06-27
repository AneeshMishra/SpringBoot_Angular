package com.aneesh.rest.webservices.resfulwebservices.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aneesh.rest.webservices.resfulwebservices.model.Todo;

@Repository
public interface TodoJpaRepository extends JpaRepository<Todo,Long> {
	
	List<Todo> findByUsername(String username);
}
