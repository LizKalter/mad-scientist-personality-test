import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IntroComponent } from './intro/intro.component';
import { QuestionsComponent } from './questions/questions.component';
import { PersonalitiesComponent } from './personalities/personalities.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    QuestionsComponent,
    PersonalitiesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
