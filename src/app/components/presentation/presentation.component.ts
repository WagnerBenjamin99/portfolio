import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {
  sendEmail(){
    window.location.href =  'mailto:wagnerbenjamin23@gmail.com';
  }
}
