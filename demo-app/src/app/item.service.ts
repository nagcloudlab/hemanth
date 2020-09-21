import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap, shareReplay, catchError } from 'rxjs/operators'
import { of, EMPTY, Observable } from 'rxjs';


// https://medium.com/better-programming/how-to-create-a-caching-service-for-angular-bfad6cbe82b0

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  // items = []

  items: Observable<any>

  constructor(private http: HttpClient) { }

  getItems() {

    // if (this.items.length === 0)
    //   return this.http
    //     .get("http://localhost:8080/api/items")
    //     .pipe(tap((items: any) => this.items = items));
    // else
    //   return of(this.items)



    if (!this.items) {
      this.items = this.http.get("http://localhost:8080/api/items").pipe(shareReplay(1), catchError(err => EMPTY));
      return this.items;
    } else {
      return this.items;
    }

  }

}
