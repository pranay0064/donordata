import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  pname : string | undefined;
  pemail : string | undefined;
  phone : string | undefined;
  constructor(private httpClient:HttpClient) { }
  api='http://localhost:8084';
  public getUsers(){
    return this.httpClient.get(this.api+'/getUsers');
  }
  public deleteUser(uid){
    return this.httpClient.delete(this.api+'/deleteUser?id='+uid);
  }
  public checkUser(user){
    return this.httpClient.post(this.api+'/loginToUser',user);
  }
  public registerUser(user){
    return this.httpClient.post(this.api+'/registerUser',user);
  }
  userprofile(data :{id:number,name:string,email:string,phonenumber:string}){
    console.log(data);
    this.pname = data.name;
    this.pemail = data.email;
    this.phone = data.phonenumber; 
    console.log(this.pemail);
  }
}
