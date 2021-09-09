import { Component, Input, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';
import { Quote } from './../../services/quote.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-daily-quote',
  templateUrl: './daily-quote.component.html',
  styleUrls: ['./daily-quote.component.css']
})
export class DailyQuoteComponent implements OnInit {

  body: string = ''; 
  author: string = '';
  quotes$: any = [];

  constructor(private quoteService: QuoteService) { }

  loadQuotes () {
  this.quoteService.getDailyQuotes().subscribe(data => {
      this.quotes$ = data;
    })
  }
  getQuote() {
    const randomQuoteIndex: number = Math.round(Math.random() * 50);
    this.body = this.quotes$[randomQuoteIndex].q;
    this.author = this.quotes$[randomQuoteIndex].a;
  }


  ngOnInit(): void {
    this.loadQuotes();
    this.getQuote();
  }

}
