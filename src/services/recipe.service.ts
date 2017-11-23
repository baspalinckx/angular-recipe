import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/toPromise';
import {Recipe} from '../app/recipes/recipe.model';


@Injectable()
export class UserService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private serverUrl = environment.serverUrl + '/users'; // URL to web api
  private recipes: Recipe[] = [];

  //
  //
  //
  constructor(private http: Http) { }

  //
  //
  //
  public getRecipes(): Promise<Recipe[]> {
    console.log('items ophalen van server');
    return this.http.get(this.serverUrl + '/recipes', { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Recipe[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  public getRecipesByID(id: Number): Promise<Recipe[]> {
    console.log('items ophalen van server');
    return this.http.get(this.serverUrl + '/recipes/' + id, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Recipe[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }







  //
  //
  //
  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }

}

