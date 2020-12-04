import { Component, OnInit } from '@angular/core';  
import { AuthService } from '../hood/auth.service';
import { Router } from '@angular/router';
import { LoginService } from '../hood/login.service';
import { User } from '../hood/user.model';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error: any;
  user: User;
  

  constructor(public loginService: LoginService,
    private authService: AuthService,private router: Router) { }

  ngOnInit(): void {

  }

  signup(first_name: string,last_name: string, username: string, password: string) {
    console.log('first_name,last_name,username,password ', first_name,last_name,username,password);

    this.authService.signup(first_name,last_name,username,password).subscribe(
      (success) => {
        this.router.navigate(['/neighbourhood']);
      },
      (error) => (this.error = error)
    );
  }
}