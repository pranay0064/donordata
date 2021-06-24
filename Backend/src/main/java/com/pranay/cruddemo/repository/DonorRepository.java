package com.pranay.cruddemo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.pranay.cruddemo.entity.Donor;
@Repository
public interface DonorRepository extends CrudRepository<Donor,Integer>{

}
