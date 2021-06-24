import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ShareService } from './share.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(private s:ShareService,private route:Router) { }
  canActivate():boolean{
    if(this.s.getadminstatus()){
      return true;
    }
    else{
      alert("please Login via AdminForm Below");
      this.route.navigate(['/login']);
    }
    return false;
  }
}
