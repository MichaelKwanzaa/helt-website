import { faQuestion } from './../../../../node_modules/@fortawesome/free-solid-svg-icons/faQuestion.d';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent {
  question = faQuestion
  downArrow = faArrowAltCircleDown

}
