import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyQuoteComponent } from './components/daily-quote/daily-quote.component';
import { QuoteService } from './services/quote.service';
import { DailyIdeasComponent } from './components/daily-ideas/daily-ideas.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyQuoteComponent,
    DailyIdeasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
