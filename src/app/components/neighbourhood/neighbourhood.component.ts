import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neighbourhood',
  templateUrl: './neighbourhood.component.html',
  styleUrls: ['./neighbourhood.component.css']
})
export class NeighbourhoodComponent implements OnInit {
  showForm=false;

  showDetails() {
    this.showForm = !this.showForm
    
  }  
  constructor() { }

  ngOnInit(){
      this.showForm = false;
  }

}
