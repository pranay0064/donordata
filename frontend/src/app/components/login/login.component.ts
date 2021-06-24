import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Store } from 'src/app/store';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //route:Routes[];
  constructor(private userService: UserService, private route: Router, private s: ShareService,private u:UserService) { }
  ngOnInit(): void {
  }
  openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  onSubmit(data) {
    console.log("Email: " + data.email
      + "Password: " + data.passwd);
    //this.email=data.email;
    //this.x=data.passwd;
    if(data.email=="pranaygarlapati@gmail.com" && data.passwd=="pranay"){
      this.s.setadminstatus(true);
      this.route.navigate(['/admin/home']);
    }
    else{
      alert("please enter correct email or password");
      this.route.navigate(['/login']);
    }
  }

  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  login(registerForm: NgForm) {
    this.userService.checkUser(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        if (resp) {
          //this.l.store('user',resp);
          //console.log(this.l.retrieve('user'));
          this.s.set(true);
          var data=JSON.stringify(resp);
          const obj=JSON.parse(data);
          this.u.userprofile(obj);
          console.log(obj);
          //console.log(this.s.name+" "+this.s.email+" "+this.s.phoneNumber);
          this.route.navigate(['/home']);
        }
        else{
          alert("please provide correct email or password");
        }
        //registerForm.reset();
        //this.getDonorDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  /*login(registerForm:NgForm){
    this.auth.getAuthToken(registerForm.value).then(res=>{
      if(res){
        this.localStorageService.store('user',res);
        this.route.navigate(['/home']);
      }
      else{
        alert("go to login page");
      }
    })
  }*/
  register(registerUser: NgForm) {
    
    this.userService.registerUser(registerUser.value).subscribe(
      (resp) => {
        console.log(resp);
        registerUser.reset();
        //this.getDonorDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
