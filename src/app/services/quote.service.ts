import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
	// proxyUrl: string = 'https://radiant-shore-66955.herokuapp.com/'
	// apiUrl: string = 'https://zenquotes.io/api/quotes/';

	constructor(private http: HttpClient) { }

	getDailyQuotes(): Observable<Quote[]> {
		// return this.http.get<Quote[]>(this.proxyUrl + this.apiUrl);
		return this.http.get<Quote[]>('http://localhost:3000/quotes');
	}
}


export interface Quote {
	body: string;
	author: string;
	htmlString: string;
}