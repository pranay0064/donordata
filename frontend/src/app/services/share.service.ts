import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  _check: Boolean;
  tcheck:Boolean;
  admincheck:Boolean;
  name:string;
  email:string;
  phoneNumber:string;
  public gettcheck(){
    return this.tcheck;
  }
  public settcheck(thetcheck:Boolean){
    this.tcheck=thetcheck;
  }
  public getName() {
    return this.name;
  }
  public getPhoneNumber() {
    return this.phoneNumber;
  }
  public getEmail() {
    return this.email;
  }
  public get() {
    return this._check;
  }
  public setName(theName:string){
    this.name=theName;
  }
  public setPhoneNumber(thephoneNumber:string){
    this.phoneNumber=thephoneNumber;
  }
  public setEmail(theemail:string){
    this.email=theemail;
  }
  public set(thecheck: Boolean) {
    this._check = thecheck;
  }
  public getadminstatus(){
    return this.admincheck;
  }
  public setadminstatus(thecheck : Boolean){
    this.admincheck=thecheck;
  }
  constructor() { }
}
