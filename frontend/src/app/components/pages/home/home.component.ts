import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { SearchComponent } from '../../partials/search/search.component';
import { TagsComponent } from '../../partials/tags/tags.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule ,NgFor, StarRatingComponent, CommonModule, SearchComponent, TagsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  foods:Food[]= [];
  constructor(private foodService:FoodService, activatedRout:ActivatedRoute){
    
    activatedRout.params.subscribe((params) => {
      if(params.searchTerm)
      this.foods = this.foodService.getALLFoodBySearchTerm(params.searchTerm);
      else if(params.tag)
      this.foods = this.foodService.getAllFoodByTag(params.tag);
      else
      this.foods = foodService.getAll();
    } )
    
  }

}
