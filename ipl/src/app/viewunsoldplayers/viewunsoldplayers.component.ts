import { Component } from '@angular/core';
import { ShowPlayers } from '../ShowPlayers';
import { ShowteamsService } from '../showteams.service';

@Component({
  selector: 'app-viewunsoldplayers',
  templateUrl: './viewunsoldplayers.component.html',
  styleUrls: ['./viewunsoldplayers.component.scss']
})
export class ViewunsoldplayersComponent {
  title:string="Unsold";
  players:ShowPlayers[];
  constructor(private service:ShowteamsService) {}
  ngOnInit() {
    this.getUnsoldPlayers();
  }
  getUnsoldPlayers():void {
    this.service.getUnsoldPlayers().subscribe(players=>this.players=players);
  }
  


}
