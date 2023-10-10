import { Component } from '@angular/core';
import { ShowPlayers } from '../ShowPlayers';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ShowteamsService } from '../showteams.service';

@Component({
  selector: 'app-viewalluserplayers',
  templateUrl: './viewalluserplayers.component.html',
  styleUrls: ['./viewalluserplayers.component.scss']
})
export class ViewalluserplayersComponent {
  players:ShowPlayers[];
  constructor(private route:Router,private http:HttpClient,private activeRoute:ActivatedRoute,private service:ShowteamsService) {}
  ngOnInit():void {
    this.getPlayers();
  }
  getPlayers():void {
    this.service.getAllPlayers().subscribe(players=>this.players=players);
  }

}
