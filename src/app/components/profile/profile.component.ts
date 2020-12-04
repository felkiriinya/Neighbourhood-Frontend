import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  error: any;

  constructor(
    private profileService: ProfileService,private router: Router) { }

  ngOnInit(): void {

  }

  profile(first_name: string,last_name: string, username: string, location: string) {
    console.log('first_name,last_name,username,location ', first_name,last_name,username,location);

    this.profileService.profile(first_name,last_name,username,location).subscribe(
      (success) => {
        this.router.navigate(['/neighbourhood']);
      },
      (error) => (this.error = error)
    );
  }
}