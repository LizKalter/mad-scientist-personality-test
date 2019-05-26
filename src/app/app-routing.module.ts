import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { QuestionsComponent } from './questions/questions.component'
import { PersonalitiesComponent } from './personalities/personalities.component'

const routes: Routes = [
  { path: 'begin', component: IntroComponent, data: {animation: 'IntroPage'} },
  { path: '', redirectTo: '/begin', pathMatch: 'full' },
  { path: 'questions', component: QuestionsComponent, data: {animation: 'QuestionsPage'} },
  { path: 'results', component: PersonalitiesComponent },
  { path: 'results/:selectedPersonality', component: PersonalitiesComponent, data: {animation: 'ResultsPage'} }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
