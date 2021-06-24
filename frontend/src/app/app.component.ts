import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DonorService } from './services/donor.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  donorDetails=null;
  userDetails=null;
  donorToUpdate={
    did:"",
    name:"",
    email:"",
    phonenumber:"",
    bloodgroup:"",
    date:""
  };
  constructor(private donorService:DonorService,private userService:UserService){
    this.getDonorDetails();
    this.getUserDetails();
  }
  register(registerForm:NgForm){
    this.donorService.registerDonor(registerForm.value).subscribe(
      (resp)=>{
        console.log(resp);
        registerForm.reset();
        this.getDonorDetails();
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  getDonorDetails(){
    this.donorService.getDonors().subscribe(
      (resp)=>{
        console.log(resp);
        this.donorDetails=resp;
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  getUserDetails(){
    this.userService.getUsers().subscribe(
      (resp)=>{
        console.log(resp);
        this.userDetails=resp;
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  deleteDonor(donor){
    this.donorService.deleteDonor(donor.did).subscribe(
      (resp)=>{
        console.log(resp);
        this.getDonorDetails();
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  deleteUser(user){
    this.userService.deleteUser(user.uid).subscribe(
      (resp)=>{
        console.log(resp);
        this.getUserDetails();
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  edit(donor){
    this.donorToUpdate=donor;
  }
  updateDonorDetails(updateForm:NgForm){
    this.donorService.updateDonor(this.donorToUpdate).subscribe(
      (resp)=>{
        console.log(resp);

        this.getDonorDetails();
        updateForm.reset();
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}
