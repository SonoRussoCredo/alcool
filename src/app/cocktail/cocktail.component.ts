import { Component, OnInit } from '@angular/core';
import  {ApiService} from '../api.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {
  cocktail:any;
  errors:any;
  message:any;
  constructor(private api: ApiService,private router: Router) { }

  ngOnInit(): void {
    this.api.getCocktail().subscribe(
      (response: any) => {this.cocktail = response.drinks},
      (error:any) => {
        console.log('errore dal componente',error.message);
        this.errors = true;
        this.message = 'opss ! qualcosa non va'
        setTimeout(()=>this.router.navigate(['/']),5000)
      });
  }

}