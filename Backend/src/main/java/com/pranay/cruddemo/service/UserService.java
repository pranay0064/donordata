package com.pranay.cruddemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pranay.cruddemo.entity.User;
import com.pranay.cruddemo.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	public User registerUser(User user) {
		return userRepository.save(user);
	}
	public List<User> getUsers(){
		return(List<User>) userRepository.findAll();
		//return null;
	}
	public void deleteUser(Integer id) {
		userRepository.deleteById(id);
	}
	public User updateUser(User user) {
		Integer id=user.getUid();
		User usr=userRepository.findById(id).get();
		usr.setName(user.getName());
		usr.setEmail(user.getEmail());
		usr.setPhonenumber(user.getPhonenumber());
		usr.setPassword(user.getPassword());
		return userRepository.save(usr);
		//return dnr;
	}
	public Boolean checkUser(User user) {
		List<User> u = (List<User>) userRepository.findAll();
		for (User other : u) {
			//System.out.println(other.getEmail()+" "+user.getEmail() +" "+ other.getPassword()+" "+user.getPassword());
            if (other.getEmail().equals(user.getEmail()) && other.getPassword().equals(user.getPassword())) {
            	
                return true;
            }
        }
		return false;
	}
	public User cUser(User user) {
		List<User> u = (List<User>) userRepository.findAll();
		for (User other : u) {
			//System.out.println(other.getEmail()+" "+user.getEmail() +" "+ other.getPassword()+" "+user.getPassword());
            if (other.getEmail().equals(user.getEmail()) && other.getPassword().equals(user.getPassword())) {
            	
                return other;
            }
        }
		return null;
	}
}
