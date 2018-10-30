import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatCardModule, } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { LayoutModule, } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SignInComponent } from './sign-in/sign-in.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { QuizSelectorComponent } from './quiz-selector/quiz-selector.component';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { QuizComponent } from './quiz/quiz.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ToolbarComponent,
    QuizSelectorComponent,
    QuizComponent,
    PresentationsComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
