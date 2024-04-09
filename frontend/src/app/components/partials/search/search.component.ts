import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchTerm= '';

  constructor(activatedRout: ActivatedRoute, private router:Router ){
    activatedRout.params.subscribe(
      (params) => {
        if (params.searchTerm) {
          this.searchTerm = params.searchTerm;
        }
      }
    )
  }

  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search/'+ term)
  }
  
}
