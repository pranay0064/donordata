import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Routes,RouterModule} from '@angular/router';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminGuardService } from './services/admin-guard.service';
import { ProfileComponent } from './components/profile/profile.component';



const routes:Routes=[
  
  {path:'login',component:LoginComponent},
  {
    path: '',
    redirectTo: '/login', 
    pathMatch: 'full'
  },
  {path:'home',component:UserhomeComponent,canActivate:[AuthGuardService]},
  {path:'phome',component:UserhomeComponent,canActivate:[AuthGuardService]},
  {path:'admin/home',component:AdminhomeComponent,canActivate:[AdminGuardService]},
  {path:'logout',component:LogoutComponent},
  {path:'logoutit',redirectTo:'/logout',pathMatch:'full'},
  {path:'**',component:LoginComponent}
  
];
@NgModule({
  declarations: [
    AppComponent,
    UserhomeComponent,
    AdminhomeComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuardService,AdminGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
