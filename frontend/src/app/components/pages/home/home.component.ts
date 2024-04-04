import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import {RouterModule} from '@angular/router';
import { CommonModule, CurrencyPipe, NgFor } from '@angular/common';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule ,NgFor, StarRatingComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  foods:Food[]= [];
  constructor(private foodService:FoodService){
    this.foods= foodService.getAll();
  }

}
