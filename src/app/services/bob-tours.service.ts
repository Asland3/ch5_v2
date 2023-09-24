import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FavoritesService } from './favorites.service';
import { firstValueFrom } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class BobToursService {
  public regions: any;
  public tourtypes: any;
  public tours: any;
  public hade: any;

  baseUrl = 'https://bob-tours-app-95a0a-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient, public favService: FavoritesService) {}

  initialize() {
    this.getRegions().then((data) => (this.regions = data));
    this.getHade().then((data) => (this.hade = data));
    this.getTourtypes().then(
      (data) => (this.tourtypes = _.sortBy(data, 'Name'))
    );
    this.getTours().then((data) => {
      this.tours = _.sortBy(data, 'Title');
      this.favService.initialize(this.tours);
    });
  }

  async getRegions() {
    let requestUrl = `${this.baseUrl}/Regions.json`;
    return await firstValueFrom(this.http.get(requestUrl));
  }

  async getTourtypes() {
    let requestUrl = `${this.baseUrl}/Tourtypes.json`;
    return await firstValueFrom(this.http.get(requestUrl));
  }

  async getTours() {
    let requestUrl = `${this.baseUrl}/Tours.json`;
    return await firstValueFrom(this.http.get(requestUrl));
  }

  async getHade() {
    let requestUrl = `${this.baseUrl}/Hade.json`;
    return await firstValueFrom(this.http.get(requestUrl));
  }
}
