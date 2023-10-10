import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable,throwError} from 'rxjs';
import { ShowTeams } from './ShowTeams';
import { ShowPlayers } from './ShowPlayers';


@Injectable({
  providedIn: 'root'
})
export class ShowteamsService {
  private Url="http://localhost:8080/teams/getallteams";
  private Url1="http://localhost:8080/teams/getteambyid";
  private Url2="http://localhost:8080/teams/addteams";
  private baseUrl="http://localhost:8080/teams/updateteam";
  private deleteUrl="http://localhost:8080/teams/deleteteam";
  private playersUrl="http://localhost:8080/players/getplayersbyteamname";
  private deletePlayerUrl="http://localhost:8080/players/deleteplayer";
  private getPlayerUrl="http://localhost:8080/players/getplayerbyid";
  private updatePlayerUrl="http://localhost:8080/players/updateplayer";
  private getAllPlayersUrl="http://localhost:8080/players/getallplayers";
  private assignUrl="http://localhost:8080/players/assign";
  private unsoldPlayersUrl="http://localhost:8080/players/getunsoldplayers";
  private deleteUserPlayerUrl="http://localhost:8080/players/deleteplayerfromadmin"



  constructor(private http:HttpClient) { }
  getTeams():Observable<ShowTeams[]> {
    return this.http.get<ShowTeams[]>(this.Url);

  }
  getPlayers(tname:string):Observable<ShowPlayers[]> {
    return this.http.get<ShowPlayers[]>(`${this.playersUrl}/${tname}`);

  }
  getUnsoldPlayers():Observable<ShowPlayers[]> {
    return this.http.get<ShowPlayers[]>(`${this.unsoldPlayersUrl}`);

  }
  getAllPlayers():Observable<ShowPlayers[]> {
    return this.http.get<ShowPlayers[]>(`${this.getAllPlayersUrl}`);

  }
  getTeam(tid):Observable<ShowTeams> {
    return this.http.get<ShowTeams>(this.Url1 +"/"+tid);
  }
  getPlayer(pid):Observable<ShowPlayers> {
    return this.http.get<ShowPlayers>(this.getPlayerUrl +"/"+pid);
  }
  deleteTeam(tid:number):Observable<Object> {
    return this.http.delete(`${this.deleteUrl}/${tid}`);
  }
  deletePlayer(pid:number):Observable<Object> {
    return this.http.delete(`${this.deletePlayerUrl}/${pid}`);
  }
  deleteUserPlayer(pid:number):Observable<Object> {
    return this.http.delete(`${this.deleteUserPlayerUrl}/${pid}`);
  }
  saveTeam(team:ShowTeams):Observable<ShowTeams> {
    return this.http.post<ShowTeams>(this.Url2,ShowTeams);
  }
  updateTeam(tid,team):Observable<Object> {
    return this.http.put(`${this.baseUrl}/${tid}`,team);
  }
  updatePlayer(pid,player):Observable<Object> {
    return this.http.put(`${this.updatePlayerUrl}/${pid}`,player);
  }
  updatePlayerData(tname,pname,assign):Observable<Object> {
    return this.http.put(`${this.assignUrl}/${tname}/${pname}`,assign);
  }
   handleError(error:HttpErrorResponse) {
    if(error.status===0) {
      console.error('An error occurred:',error.error);
    } else {
      console.error(error);
    }
    return throwError(error);
  }

}
