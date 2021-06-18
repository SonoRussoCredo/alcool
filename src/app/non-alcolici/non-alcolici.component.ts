import { Component, OnInit } from '@angular/core';
import  {ApiService} from '../api.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-non-alcolici',
  templateUrl: './non-alcolici.component.html',
  styleUrls: ['./non-alcolici.component.css']
})
export class NonAlcoliciComponent implements OnInit {
  nonalcolici: any = [];
  nonalcool: any;
  errors:any;
  message:any
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getNonAlcolici().subscribe(
      (response: any) => {this.nonalcolici = response.drinks},
      (error:any) => {
        console.log('errore dal componente',error.message);
        this.errors = true;
        this.message = 'opss ! qualcosa non va'
        setTimeout(()=>this.router.navigate(['/']),5000)
      });
  }
}