import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(public http: HttpClient) { }

  getDetails(){
    return this.http.get("https://5bcce576cf2e850013874767.mockapi.io/task/categories");
  }

  getDetailsId(id) {
    return this.http.get("https://5bcce576cf2e850013874767.mockapi.io/task/categories/"+id);
  }
}
