import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private readonly http: HttpClient) {}
  getData(): Observable<any> {
    let data$: Observable<any> | null = null;
    data$ = this.http
      .get('https://dummyjson.com/products')
    return data$;
  }
}
