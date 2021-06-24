import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  constructor(private httpClient:HttpClient) { }
  api='http://localhost:8084';
  public registerDonor(donorData){
    return this.httpClient.post(this.api+'/registerDonor',donorData);
  }
  public getDonors(){
    return this.httpClient.get(this.api+'/getDonors');
  }
  public deleteDonor(did){
    return this.httpClient.delete(this.api+'/deleteDonor?id='+did);
  }
  public updateDonor(donor){
    return this.httpClient.put(this.api+'/updateDonor',donor);
  }
}
