import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neighbourhood',
  templateUrl: './neighbourhood.component.html',
  styleUrls: ['./neighbourhood.component.css']
})
export class NeighbourhoodComponent implements OnInit {
  showForm=false;
  showUsers=false;

 

  showDetails() {
    this.showForm = !this.showForm
    
  }  
  showUsersList(){
    this.showUsers= !this.showUsers
  }
  constructor( ) { }

  ngOnInit(){
      this.showForm = false;
      this.showUsers =false;
     
  }

}
