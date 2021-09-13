import { Component, OnInit } from '@angular/core';
import { Idea, IdeaService } from './../../services/idea.service';
@Component({
  selector: 'app-daily-ideas',
  templateUrl: './daily-ideas.component.html',
  styleUrls: ['./daily-ideas.component.css']
})
export class DailyIdeasComponent implements OnInit {

  ideas$: Idea[] = []

  constructor(private ideaService: IdeaService) { }

  ngOnInit(): void {
    this.getIdeas();
  }

  getIdeas() {
    this.ideaService.getIdeas().subscribe(ideas => {
      this.ideas$ = ideas;
    })
  }
}



