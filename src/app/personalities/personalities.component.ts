import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Personality } from '../personality';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-personalities',
  templateUrl: './personalities.component.html',
  styleUrls: ['./personalities.component.scss'],
})
export class PersonalitiesComponent implements OnInit {
  height: number = 0;
  personalities: Personality[];
  selectedPersonality: Personality;
  transitioning: boolean = false;

  constructor(private quizService: QuizService, private route: ActivatedRoute, private element: ElementRef) { }

  private getPersonalities(): void {
    this.personalities = this.quizService.getPersonalities();
  }

  private getSelectedPersonality(id: string): void {
    this.setHeight();
    this.transitioning = true; // fade out
    setTimeout(()=> {
      for (let personality of this.personalities) {
        if (id == personality.value) {
          this.selectedPersonality = personality;
          break;
        }
      }
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

  private setHeight() {
    let contentBox = this.element.nativeElement.getElementsByClassName('box-content')[0];
    if (contentBox) {
      this.height = this.element.nativeElement.getElementsByClassName('box-content')[0].offsetHeight;
    } else {
      this.height = 0;
    }
  }

  ngOnInit() {
    this.getPersonalities();
    this.route.params.subscribe(params => {
      this.getSelectedPersonality(params['selectedPersonality']);
    });
  }

}
