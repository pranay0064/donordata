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

import com.pranay.cruddemo.entity.Donor;
import com.pranay.cruddemo.service.DonorService;

@RestController
@CrossOrigin(allowedHeaders="*",origins="*")
public class DonorController {
	@Autowired
	private DonorService donorService;
	
	@PostMapping("/registerDonor")
	public Donor registerDonor(@RequestBody Donor donor) {
		return donorService.registerDonor(donor);
	}
	@GetMapping("/getDonors")
	public List<Donor> getDonors(){
		return donorService.getDonors();
		
	}
	@DeleteMapping("/deleteDonor")
	public void deleteDonor(@RequestParam Integer id) {
		donorService.deleteDonor(id);
	}
	@PutMapping("/updateDonor")
	public Donor updateDonor(@RequestBody Donor donor) {
		return donorService.updateDonor(donor);
	}
}	
