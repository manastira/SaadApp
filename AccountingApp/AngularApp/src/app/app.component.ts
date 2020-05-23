import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  userlogin: boolean = false;
  profileName: string;
  @ViewChild('drawer') drawer: MatSidenav
  constructor(public dialog: MatDialog, private router: Router) {
    this.AuthenticationAccess();

  }
  profile() {

  }
  ngAfterViewInit(): void {
    if (this.drawer)
      this.drawer.toggle();
  }
  ngOnInit(): void {

  }
  title = 'SAAD';


  redirectWelcome() {
    if (this.AuthenticationAccess())
      this.router.navigate(['welcome'])
  }

  AuthenticationAccess() {
    if (sessionStorage.getItem('ACCESS_TOKEN')) {
      this.userlogin = true;
      return true;
    }
    else {
      this.userlogin = false;
      this.router.navigateByUrl('/login')
      return false;
    }
  }
  onActivate(e) {

  }
  logout() {
    sessionStorage.removeItem('ACCESS_TOKEN');
    this.AuthenticationAccess();
    if (this.drawer) {
      this.drawer.close();
      this.drawer.disableClose = true;

      if (this.drawer.opened)
        this.drawer.toggle();
    }

  }
}
