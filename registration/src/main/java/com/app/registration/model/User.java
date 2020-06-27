package com.app.registration.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity 
public class User {
	@Id
	private int id;
	private String emailId;
	private String userName;
	private String password;
	
	public int getId() {
		return id;
	}
	//or change to private
//	public void setId(int id) {
//		this.id = id;
//	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public User( String emailId, String userName, String password) {
		super();
		this.emailId = emailId;
		this.userName = userName;
		this.password = password;
	}
	public User() {
		super();
	} 
	
	
}
