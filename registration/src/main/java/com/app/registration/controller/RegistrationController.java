package com.app.registration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.registration.model.User;
import com.app.registration.service.RegistrationService;

@RestController

//Controller returns view /Model &View because every method represent a view
//RestController returns response in the from of JSON , XML, Object ==> we want only responce
//=> by default every method returns responce => no need responseBody
//can use controller + response body
public class RegistrationController {
	@Autowired
	private RegistrationService service;
	//Call when user submit the form
	@PostMapping("/registeruser")
	public User registerUser(@RequestBody User user) throws Exception {
		//check email not to be used before save
		String tempEmailId=user.getEmailId();
		if(!tempEmailId.isEmpty()) {
			User userObj=service.fetchUserByEmailId(tempEmailId);
			if(userObj != null) {
				throw new Exception("user with "+tempEmailId+" is already existed");
			}
		}

		User userObj=null;
		userObj = service.saveUser(user);
		return userObj;
	}
	
	@PostMapping("/loginUser")
	public User loginUser(@RequestBody User user) throws Exception {
		String tempEmailId=user.getEmailId();
		String tempPassword=user.getPassword();
		User userObj=null;
		userObj = service.fetchUserByEmailIdAndPassword(tempEmailId,tempPassword);
		if(userObj == null) {
			throw new Exception("bad credentials");
		}
		return userObj;
	}

}
