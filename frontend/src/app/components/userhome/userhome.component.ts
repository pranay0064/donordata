import { Component, OnInit } from '@angular/core';
import { DonorService } from 'src/app/services/donor.service';
import { ShareService } from 'src/app/services/share.service';
import { UserService } from 'src/app/services/user.service';
import { Store } from 'src/app/store';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  //s:Store=new Store();
  pname : any;
  pemail : any;
  phone : any;
  donorDetails=null;
  constructor(private donorService:DonorService,private s:ShareService,private u:UserService) { }
  see:Boolean=this.s.get();
  ngOnInit(): void {
    this.getDonorDetails();
    this.pname = this.u.pname;
    this.pemail = this.u.pemail;
    this.phone = this.u.phone;
    console.log(this.pname);
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }
  //date from here to 
  date: Date = new Date();
  //x = '2021-02-12';
  currentdate: number;
  nextdate: number;

  check(x) {
    this.currentdate = +this.date.getMonth();
    this.nextdate = +x.substring(5, 7);

    if (this.currentdate - this.nextdate >= 3) {
      return false;
    } else return true;
  }
  //to here
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
  
  //from here that scroll function
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }
  scroll = (event: any): void => {
    // Here scroll is a variable holding the anonymous function
    // this allows scroll to be assigned to the event during onInit
    // and removed onDestroy
    // To see what changed:
    this.scrollFunction();
  };
  scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById('myBtn').style.display = 'block';
    } else {
      document.getElementById('myBtn').style.display = 'none';
    }
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


}
