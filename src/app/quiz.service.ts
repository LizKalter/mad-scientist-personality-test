import { Injectable } from '@angular/core';

import { Question } from './question';
import { QUESTIONS } from './question-list';
import { Personality } from './personality';
import { PERSONALITIES } from './personality-list';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  getQuestions(): Question[] {
    return QUESTIONS;
  }

  getPersonalities(): Personality[] {
    return PERSONALITIES;
  }

  constructor() { }
}
