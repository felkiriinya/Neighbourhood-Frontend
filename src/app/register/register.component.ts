import { Component, OnInit } from '@angular/core';  
import { AuthService } from '../hood/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user;
  

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.user = {
      FirstName: '',
      LastName: '',
      UserName: '',
      Email: '',
      Password: '',
      };
  }  
  signup() {
    this.authService.signup(this.user).subscribe(
    response =>{
      alert('User' + this.user.UserName + 'created');
      this.router.navigate(['/neighbourhood']);
    },
    error =>{
      console.error('error', error);
    } 
    );
  }
}