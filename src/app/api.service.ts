import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apipath = 'https://www.thecocktaildb.com/api/json/v1/1/'
  constructor(private http: HttpClient) {
  }
    getAlcolici(){
      return this.http.get( this.apipath + 'filter.php?a=Alcoholic').pipe(
        catchError(this.handleError)
      )

    }
    getNonAlcolici(){
      return this.http.get( this.apipath + 'filter.php?a=Non_Alcoholic').pipe(
        catchError(this.handleError)
      )
    }
    getDrink(){
      return this.http.get( this.apipath + 'filter.php?c=Ordinary_Drink').pipe(
        catchError(this.handleError)
      )
    }
    getCocktail(){
      return this.http.get( this.apipath + 'filter.php?c=Cocktail').pipe(
        catchError(this.handleError)
      )
    }
    getRicetta(id){
      return this.http.get( this.apipath + 'lookup.php?i=' + id)
    }
    getSingolaRicetta(id) {
      return this.http.get( 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + id)
    }
    private handleError(error:any) {
      if(error.status === 0) {
        console.log('an error occured:', error.error)
      } else {
        console.error(
          `backend returned code ${error.status},`+
          `message was: ${error.message}`
        )
      }
      return throwError(error)
    }
}