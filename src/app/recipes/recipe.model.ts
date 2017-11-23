import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  private _name: string;
  private _description: string;
  private _imagePath: string;
  private _ingredients: Ingredient[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public get name(): string {
    return this._name
  }

  public set name (n: string) {
    this._name = n;
  }

  public get description(): string {
    
  }
}

  // constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
  //   this.name = name;
  //   this.description = desc;
  //   this.imagePath = imagePath;
  //   this.ingredients = ingredients;




