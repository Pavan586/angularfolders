import { Component } from '@angular/core';
import { ShowPlayers } from '../ShowPlayers';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ShowteamsService } from '../showteams.service';

@Component({
  selector: 'app-viewuserplayers',
  templateUrl: './viewuserplayers.component.html',
  styleUrls: ['./viewuserplayers.component.scss']
})
export class ViewuserplayersComponent {
  title:string;
  teamname:string;
  players:ShowPlayers[];
  private routeSub:Subscription;
  constructor(private route:Router,private http:HttpClient,private activeRoute:ActivatedRoute,private service:ShowteamsService) {}
  ngOnInit() {
    this.routeSub=this.activeRoute.params.subscribe(params => {
      console.log(params);
      console.log(params['teamname']);
      this.teamname=params['teamname'];
      this.title=this.teamname;
    })
    this.getPlayers();
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  getPlayers():void {
    this.service.getPlayers(this.teamname).subscribe(players=>this.players=players);
  }
  /*deletePlayer(pid:number) {
    this.service.deletePlayer(pid).subscribe(data=>{
      alert("Player Deleted Successfully");
      this.route.navigate(["/dashboard/showteams"]);
    },error=>console.error());
    
  }*/
  deletePlayer(pid:number) {
    this.service.deletePlayer(pid).subscribe(data=>{
      alert("Player Released Successfully");
      this.route.navigate(["/usershow"]);
    },error=>console.error());
    
  }

}
