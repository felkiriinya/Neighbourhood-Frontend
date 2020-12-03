import { Component, OnInit } from '@angular/core';
import { AuthService } from '../hood/auth.service';
import { LogoutService } from '../hood/logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;

  constructor(public logoutService: LogoutService,
    private authService: AuthService,
    private router: Router) { }

    ngOnInit(): void {
      this.logoutService.changeLogoutState(true);
    }
  
    login(username: string, password: string) {
      console.log('username, password ', username, password);
  
      this.authService.login(username, password).subscribe(
        (success) => {
          this.logoutService.changeLogoutState(false);
          this.router.navigate(['/neighbourhood']);
        },
        (error) => (this.error = error)
      );
    }
  }