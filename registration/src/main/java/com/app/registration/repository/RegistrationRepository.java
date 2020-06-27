package com.app.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.registration.model.User;

//repository should be interface and extends CRUD/JPA repository
//holds all the basic method for db communication

@Repository
//user should be entity to use it here
public interface RegistrationRepository extends JpaRepository<User, Integer>{

	public User findByEmailId(String emailId);

	public User findByEmailIdAndPassword(String emailId, String password);

}
