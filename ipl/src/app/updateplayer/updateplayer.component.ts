import { Component } from '@angular/core';
import { ShowPlayers } from '../ShowPlayers';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowteamsService } from '../showteams.service';

@Component({
  selector: 'app-updateplayer',
  templateUrl: './updateplayer.component.html',
  styleUrls: ['./updateplayer.component.scss']
})
export class UpdateplayerComponent {
  pid:number;
  player:ShowPlayers;
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute,private service:ShowteamsService) {}
  ngOnInit():void {
    this.getPlayers();
  }
  getPlayers():void {
    this.pid=+this.route.snapshot.paramMap.get("pid");
    if(this.pid !=0) {
      this.service.getPlayer(this.pid).subscribe(player=>this.player=player);

    } else {
      this.player=new ShowPlayers(0,"","","","",0,0);
      

    }

  }
  submit(UpdatePlayers:any) {
    console.log(this.pid);
    this.service.updatePlayer(this.pid,this.player).subscribe(data=>{
    alert("Player updated succesfully");
    this.router.navigate(["/viewallplayers"]);
    },error=>console.error());
    //this.service.saveTeam(this.team).subscribe(team=>this.team=team);
    

  }
  


}
