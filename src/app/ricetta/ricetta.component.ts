import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ricetta',
  templateUrl: './ricetta.component.html',
  styleUrls: ['./ricetta.component.css']
})
export class RicettaComponent implements OnInit {
  ricetta: any;
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("idDrink"))
    this.api.getRicetta(productIdFromRoute).subscribe((response:any) => this.ricetta = response.drinks[0]);
  }
}
