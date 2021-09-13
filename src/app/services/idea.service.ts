import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  constructor(private http: HttpClient) { }

  getIdeas(): Observable<Idea[]> {
    return this.http.get<Idea[]>('http://localhost:3000/ideas')
  }
}

export interface Idea {
  id: string,
  date: Date,
  body: string,
  categories: string[]
}
