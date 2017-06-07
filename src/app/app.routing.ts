import { RouterModule, Routes } from '@angular/router';
import { AllQuestionsBaseComponent } from './components/all-questions-base/all-questions-base.component';
import { SingleQuestionBaseComponent } from './components/single-question-base/single-question-base.component';

const routesConfig:Routes = [
  {path: 'question/:id', component: SingleQuestionBaseComponent},
  {path: '**', component: AllQuestionsBaseComponent}
];

export const routerModule = RouterModule.forRoot(routesConfig);