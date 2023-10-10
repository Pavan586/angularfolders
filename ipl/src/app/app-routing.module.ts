import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AddteamsComponent } from './addteams/addteams.component';
import { AddplayersComponent } from './addplayers/addplayers.component';
import { AssignComponent } from './assign/assign.component';
import { ShowteamsComponent } from './showteams/showteams.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { UpdateteamComponent } from './updateteam/updateteam.component';
import { ViewplayersComponent } from './viewplayers/viewplayers.component';
import { ViewallplayersComponent } from './viewallplayers/viewallplayers.component';
import { UpdateplayerComponent } from './updateplayer/updateplayer.component';
import { UsershowComponent } from './usershow/usershow.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ViewunsoldplayersComponent } from './viewunsoldplayers/viewunsoldplayers.component';
import { FrontComponent } from './front/front.component';
import { ViewuserplayersComponent } from './viewuserplayers/viewuserplayers.component';
import { ViewalluserplayersComponent } from './viewalluserplayers/viewalluserplayers.component';
import { AdminregistartionComponent } from './adminregistartion/adminregistartion.component';

const routes: Routes = [
  {path:'',component:FrontComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:UserloginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'dashboard/addteams',component:AddteamsComponent},
  {path:'dashboard/addplayers',component:AddplayersComponent},
  {path:'dashboard/assign',component:AssignComponent},
  {path:'dashboard/showteams',component:ShowteamsComponent},
  {path:'update/:tid',component:UpdateteamComponent},
  {path:'viewplayers/:teamname',component:ViewplayersComponent},
  {path:'viewallplayers',component:ViewallplayersComponent},
  {path:'updateplayer/:pid',component:UpdateplayerComponent},
  {path:'register',component:RegisterComponent},
  {path:'usershow',component:UsershowComponent},
  {path:'userdashboard',component:UserdashboardComponent},
  {path:'viewunsoldplayers',component:ViewunsoldplayersComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'viewuserplayers/:teamname',component:ViewuserplayersComponent},
  {path:'viewalluserplayers',component:ViewalluserplayersComponent},
  {path:'front',component:FrontComponent},
  {path:'adminregister',component:AdminregistartionComponent},






















];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
