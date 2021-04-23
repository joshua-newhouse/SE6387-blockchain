import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Candidate, QuestionBase} from '../../vote.model';

@Component({
  selector: 'bvs-race-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<Candidate>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
