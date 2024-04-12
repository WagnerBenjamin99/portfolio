import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';


@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {

}
