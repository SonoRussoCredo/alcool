import { Component, OnInit } from '@angular/core';
import  {ApiService} from '../api.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-alcolici',
  templateUrl: './alcolici.component.html',
  styleUrls: ['./alcolici.component.css']
})
export class AlcoliciComponent implements OnInit {
  alcolici: any = [];
  alcool: any;
  errors:any;
  message:any
  constructor(private api: ApiService,private router: Router) { }

  ngOnInit(): void {
    this.api.getAlcolici().subscribe(
      (response: any) => {this.alcolici = response.drinks},
      (error:any) => {
        console.log('errore dal componente',error.message);
        this.errors = true;
        this.message = 'opss ! qualcosa non va'
        setTimeout(()=>this.router.navigate(['/']),5000)
      });
  }
}