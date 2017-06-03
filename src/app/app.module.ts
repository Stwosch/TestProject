import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionActivityComponent } from './components/question-activity/question-activity.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderTitleComponent } from './components/header-title/header-title.component';
import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { HeaderSortComponent } from './components/header-sort/header-sort.component';
import { TopicComponent } from './components/topic/topic.component';
import { TopicCommentComponent } from './components/topic-comment/topic-comment.component';
import { TopicVotesComponent } from './components/topic-votes/topic-votes.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionActivityComponent,
    HeaderComponent,
    HeaderTitleComponent,
    HeaderSearchComponent,
    HeaderSortComponent,
    TopicComponent,
    TopicCommentComponent,
    TopicVotesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
