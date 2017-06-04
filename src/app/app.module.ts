import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { QuestionsService } from './services/questions.service';
import { UsersService } from './services/users.service';
import { AnswersService } from './services/answers.service';
import { CommentsService } from './services/comments.service';
import { AllQuestionsBaseService } from './services/all-questions-base.service';

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
import { AllQuestionsBaseComponent } from './components/all-questions-base/all-questions-base.component';

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
    ProfileComponent,
    AllQuestionsBaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    QuestionsService,
    UsersService,
    AnswersService,
    CommentsService,
    AllQuestionsBaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
