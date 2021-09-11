import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-ideas',
  templateUrl: './daily-ideas.component.html',
  styleUrls: ['./daily-ideas.component.css']
})
export class DailyIdeasComponent implements OnInit {
  ideas: Idea[] = [
    {
      id: '1',
      date: new Date(),
      body: 'This is my first idea',
      categories: []
    },
    // {
    //   id: '2',
    //   date: new Date(),
    //   body: 'A second idea is nearly as good as a first idea',
    //   categories: []
    // },
    // {
    //   id: '3',
    //   date: new Date(),
    //   body: 'And a final idea for the day',
    //   categories: []
    // }
  ]
  constructor() { }

  ngOnInit(): void {
  }



}




export interface Idea {
  id: string,
  date: Date,
  body: string,
  categories: string[]
}
