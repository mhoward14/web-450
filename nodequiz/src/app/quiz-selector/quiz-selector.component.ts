import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-selector',
  templateUrl: './quiz-selector.component.html',
  styleUrls: ['./quiz-selector.component.css']
})
export class QuizSelectorComponent implements OnInit {

name: any;

  constructor() {this.name = ''; }

  ngOnInit() {

}

onSubmit (FormData) {
  console.log (this.name + '= this.name');
}
}
