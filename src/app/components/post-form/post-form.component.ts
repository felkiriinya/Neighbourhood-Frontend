import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Neighbourhood } from 'src/app/models/neighbourhood';
import { NeighbourhoodService } from 'src/app/services/neighbourhood.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  neighbourhoods:Neighbourhood[];
  error: any;
  newneighbourhoods: Neighbourhood[];

  getNeighbourhoods(): void{
    this.neighbourhoodService.getNeighbourhoods().subscribe((data: Neighbourhood[]) => {
      this.neighbourhoods = data;
      console.log('this.neighbourhoods', this.neighbourhoods);
    });
  }

  constructor(private neighbourhoodService: NeighbourhoodService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.neighbourhoods = this._route.snapshot.data.resolvedTodos || [];
  }

}
