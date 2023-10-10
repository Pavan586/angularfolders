import { Component } from '@angular/core';
import { ShowTeams } from '../ShowTeams';
import { ShowteamsService } from '../showteams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usershow',
  templateUrl: './usershow.component.html',
  styleUrls: ['./usershow.component.scss']
})
export class UsershowComponent {
  teams:ShowTeams[];
  constructor(private service:ShowteamsService,private router:Router) {}
  ngOnInit() {
    this.getTeams();
  }
  getTeams():void {
    this.service.getTeams().subscribe(teams=>this.teams=teams);
  }

}
