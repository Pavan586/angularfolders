import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent {
  adminEmail:string="";
  adminPassword:string="";
  constructor(private route:Router,private http:HttpClient) {}
  submit(AdminLogin:any) {
    let bodyData={
      "adminEmail":this.adminEmail,
      "adminPassword":this.adminPassword
    };
    this.http.post("http://localhost:8080/registration/adminlogin",bodyData).subscribe((resultData:any)=> {
      console.log(resultData);
      if(resultData.message =="Login success") {
        alert("Login Success");
        this.route.navigate(['/dashboard']);
      } else {
        alert("Login failed")
      }
    })

  }
  onRegister() {
    this.route.navigate(['/adminregister']);

  }

}
