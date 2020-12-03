import { Component, OnInit } from '@angular/core';
import { User } from '../hood/user.model';
import { UserService } from '../hood/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.user = {
      FirstName: '',
      LastName: '',
      UserName: '',
      Email: '',
      Password: '',
      };
  }  
  onRegister() {
    this.userService.registerUser(this.user).subscribe(
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