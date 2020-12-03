import { Component, OnInit } from '@angular/core';
import { Neighbourhood } from 'src/app/models/neighbourhood';

@Component({
  selector: 'app-neighbourhood',
  templateUrl: './neighbourhood.component.html',
  styleUrls: ['./neighbourhood.component.css']
})
export class NeighbourhoodComponent implements OnInit {
  showForm=false;
  showUsers=false;
  createForm = false;
  neighbourhoods:Neighbourhood[];

  
  deletingNeighbourhood(deleteNeighbourhood, index){
    if(deleteNeighbourhood){
        let toDelete =confirm("Are you sure you want to delete this Neighbourhood?")

        if(toDelete){
            this.neighbourhoods.splice(index)
        }
    }
}

  showDetails() {
    this.showForm = !this.showForm
    
  }  
  showUsersList(){
    this.showUsers= !this.showUsers
  }

  showCreationform(){
    this.createForm = !this.createForm
  }

  constructor( ) { }

  ngOnInit(){
      this.showForm = false;
      this.showUsers =false;
      this.createForm = false;
     
  }

}
