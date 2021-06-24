package com.pranay.cruddemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pranay.cruddemo.entity.Donor;
import com.pranay.cruddemo.repository.DonorRepository;

@Service
public class DonorService {
	@Autowired
	private DonorRepository donorRepository;
	public Donor registerDonor(Donor donor) {
		return donorRepository.save(donor);
	}
	public List<Donor> getDonors(){
		return(List<Donor>) donorRepository.findAll();
		//return null;
	}
	public void deleteDonor(Integer id) {
		donorRepository.deleteById(id);
	}
	public Donor updateDonor(Donor donor) {
		Integer id=donor.getDid();
		Donor dnr=donorRepository.findById(id).get();
		dnr.setName(donor.getName());
		dnr.setEmail(donor.getEmail());
		dnr.setPhonenumber(donor.getPhonenumber());
		dnr.setBloodgroup(donor.getBloodgroup());
		dnr.setDate(donor.getDate());
		return donorRepository.save(dnr);
		//return dnr;
	}
}
