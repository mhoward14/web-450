import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { QuizSelectorComponent } from './quiz-selector/quiz-selector.component';
import { QuizComponent } from './quiz/quiz.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { ResultsComponent } from './results/results.component';



const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: '', component: SignInComponent},
  { path: 'quiz-selector', component: QuizSelectorComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'presentations', component: PresentationsComponent},
  { path: 'results', component: ResultsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
