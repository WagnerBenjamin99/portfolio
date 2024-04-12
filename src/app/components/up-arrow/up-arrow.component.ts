import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-up-arrow',
  standalone: true,
  imports: [],
  templateUrl: './up-arrow.component.html',
  styleUrl: './up-arrow.component.css'
})
export class UpArrowComponent {
  constructor(){
    this.isShow = false;
  }

  isShow: boolean;
  topPosToStartShowing = 2;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(scrollPosition)
    this.isShow = scrollPosition >= this.topPosToStartShowing;
    console.log(this.isShow)
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
