import { Component, OnInit } from '@angular/core';
import  {ApiService} from '../api.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {
  drink:any;
  errors:any;
  message:any;
  constructor(private api: ApiService,private router: Router) { }

  ngOnInit(): void {
    this.api.getDrink().subscribe(
      (response: any) => {this.drink = response.drinks},
      (error:any) => {
        console.log('errore dal componente',error.message);
        this.errors = true;
        this.message = 'opss ! qualcosa non va'
        setTimeout(()=>this.router.navigate(['/']),5000)
      });
  }

}