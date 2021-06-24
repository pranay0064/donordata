import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  pname : any;
  pemail : any;
  phone : any;
  name:string=null;
  email:string=null;
  phonenumber:string=null;
  //router: any;
  constructor(private s:ShareService,private userservices:UserService,private router:Router) { 
    /*this.name=this.s.getName();
  this.email=this.s.getEmail();
  this.phonenumber=this.s.getPhoneNumber();
    console.log(this.name+" "+this.phonenumber+" "+this.email);*/
  }
  
  navigate():void{
   
    this.s.settcheck(true);
    this.router.navigate(['/home']);
   }
  ngOnInit(): void {
    //this.s.settcheck(true);
    this.pname = this.userservices.pname;
    this.pemail = this.userservices.pemail;
    this.phone = this.userservices.phone;
    console.log(this.userservices.pname);
  }
}
