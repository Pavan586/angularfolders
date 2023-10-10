import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminregistartion',
  templateUrl: './adminregistartion.component.html',
  styleUrls: ['./adminregistartion.component.scss']
})
export class AdminregistartionComponent {
  aemail:string="";
  apassword:string="";
  constructor(private route:Router,private http:HttpClient) {}
  submit(Register:any) {
    let bodyData = {
      "aemail":this.aemail,
      "apassword":this.apassword
    };
    this.http.post("http://localhost:8080/registration/admin",bodyData).subscribe((resultData:any)=>
    {
    console.log(resultData);
    alert("Admin Registered Successful");
    this.route.navigate(['/adminlogin']);
    });

  }

}
