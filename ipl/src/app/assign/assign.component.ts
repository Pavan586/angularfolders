import { Component } from '@angular/core';
import { ShowPlayers } from '../ShowPlayers';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowteamsService } from '../showteams.service';
import { Assign } from '../Assign';
import { ShowTeams } from '../ShowTeams';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss']
})
export class AssignComponent {
  msg:string;
  teams:ShowTeams[];
  tname:string;
  pname:string;
  assign:Assign;
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute,private service:ShowteamsService) {}
  ngOnInit() {
    this.getTeams();
  }
  getTeams():void {
    this.service.getTeams().subscribe(teams=>this.teams=teams);
  }
  submit(UpdatePlayers:any) {
    this.service.updatePlayerData(this.tname,this.pname,this.assign).subscribe(data=>{
    alert("Player Assined to Team succesfully");
    this.router.navigate(["/usershow"]);
    },(error)=> {
      this.msg=error.error.message;
      alert(this.msg);
    });
    

  }
  
    
    

  

}
