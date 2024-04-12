import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent {

}
