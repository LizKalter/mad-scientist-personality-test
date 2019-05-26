import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

import { Question } from '../question';
import { Personality } from '../personality';
import { QuizService } from '../quiz.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  animations: [
    trigger('enterQuiz', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('.3s', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
  ]
})
export class QuestionsComponent implements OnInit {
  height: number;
  questions: Question[];
  selectedQuestion: Question;
  transitioning: boolean = false;
  private personalities: Personality[];

  constructor(private quizService: QuizService, private router: Router, private element: ElementRef) { }

  getNextQuestion(): void {
    this.setHeight();
    this.transitioning = true; // fade out
    setTimeout(()=> {
      let currentIndex = this.questions.indexOf(this.selectedQuestion);
      this.selectedQuestion = this.questions[currentIndex + 1];
    }, 200); // wait for fade out
    setTimeout(()=> {
      this.setHeight(); // resize box
    }, 200);
    setTimeout(()=> {
      this.transitioning = false; // fade in
    }, 200);
    setTimeout(()=> {
      this.height = null;
    }, 400);
  }

  getResults(): void {
    for (let question of this.questions) {
      for (let personality of this.personalities) {
        if (question.selection == personality.value) {
          personality.score++;
          break;
        }
      }
    }

    let currentScore: number = 0;
    let selectedPersonality: string = '';
    
    for (let personality of this.personalities) {
      if (!currentScore || currentScore < personality.score) {
        currentScore = personality.score;
        selectedPersonality = personality.value;
      }
    }

    this.router.navigate(['/results', selectedPersonality]);
  }

  private getQuestions(): void {
    this.questions = this.quizService.getQuestions();
    this.selectedQuestion = this.questions[0];
  }

  private getPersonalities(): void {
    this.personalities = this.quizService.getPersonalities();
  }

  private setHeight() {
    this.height = this.element.nativeElement.getElementsByClassName('box-content')[0].offsetHeight;
  }

  ngOnInit() {
    this.getQuestions();
    this.getPersonalities();
  }

}
