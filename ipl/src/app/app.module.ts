import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddteamsComponent } from './addteams/addteams.component';
import { AddplayersComponent } from './addplayers/addplayers.component';
import { RegisterComponent } from './register/register.component';
import { AssignComponent } from './assign/assign.component';
import { ShowteamsComponent } from './showteams/showteams.component';
import { ShowteamsService } from './showteams.service';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserloginComponent,
    DashboardComponent,
    AddteamsComponent,
    AddplayersComponent,
    RegisterComponent,
    AssignComponent,
    ShowteamsComponent,
    HomeComponent,
    UpdateteamComponent,
    ViewplayersComponent,
    ViewallplayersComponent,
    UpdateplayerComponent,
    UsershowComponent,
    UserdashboardComponent,
    ViewunsoldplayersComponent,
    FrontComponent,
    ViewuserplayersComponent,
    ViewalluserplayersComponent,
    AdminregistartionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ShowteamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
