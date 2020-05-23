import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeMainComponent } from './Pages/home-main/home-main.component';
import { MenuComponent } from './Pages/Menu/menu/menu.component';
import { Menu2Component } from './Pages/Menu/menu2/menu2.component';
import { WelcomePageComponent } from './Pages/welcome-page/welcome-page.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomeTableComponent } from './Pages/home-table/home-table.component';
import { TestTableComponent } from './Pages/test-table/test-table.component';
import { DetailsComponent } from './Pages/details/details.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: 'table', component: HomeTableComponent
  },
  {
    path: 'menu', component: Menu2Component
  },
  {
    path: 'welcome', component: WelcomePageComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'testtable', component: TestTableComponent
  },
  {
    path: 'details', component: DetailsComponent
  },
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
