import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('https://www.breakingbadapi.com/api/characters');
  }
}
