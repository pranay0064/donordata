package com.pranay.cruddemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pranay.cruddemo.entity.User;
import com.pranay.cruddemo.service.UserService;

@RestController
@CrossOrigin(allowedHeaders="*",origins="*")
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping("/loginUser")
	public Boolean checkUser(@RequestBody User user) {
		
		return userService.checkUser(user);
	}
	
	@PostMapping("/loginToUser")
	public User cUser(@RequestBody User user) {
		
		return userService.cUser(user);
	}
	
	@PostMapping("/registerUser")
	public User registerUser(@RequestBody User user) {
		return userService.registerUser(user);
	}
	@GetMapping("/getUsers")
	public List<User> getUsers(){
		return userService.getUsers();
		
	}
	@DeleteMapping("/deleteUser")
	public void deleteUser(@RequestParam Integer id) {
		userService.deleteUser(id);
	}
	@PutMapping("/updateUser")
	public User updateUser(@RequestBody User user) {
		return userService.updateUser(user);
	}
}
