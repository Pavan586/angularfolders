import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent {
  loginEmail:string="";
  loginPassword:string="";
  constructor(private route:Router,private http:HttpClient) {}
  submit(Login:any) {
    let bodyData={
      "loginEmail":this.loginEmail,
      "loginPassword":this.loginPassword
    };
    this.http.post("http://localhost:8080/registration/login",bodyData).subscribe((resultData:any)=> {
      console.log(resultData);
      if(resultData.message =="Email not exists") {
        alert("Email not exists");
      } else if(resultData.message=="Login Success") {
        this.route.navigate(['/userdashboard']);
      } else {
        alert("Incorrect Email and and Paasword")
      }
    })

    console.log(Login);
  }
  onRegister() {
    this.route.navigate(['/register']);

  }


}
