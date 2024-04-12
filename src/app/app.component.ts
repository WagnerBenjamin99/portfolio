import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { FooterComponent } from './components/footer/footer.component';
import { UpArrowComponent } from './components/up-arrow/up-arrow.component';
import { EducationComponent } from './components/education/education.component';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, PresentationComponent, AboutmeComponent, 
    TechnologiesComponent, FooterComponent, UpArrowComponent, EducationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{

  title = 'portfolio';
  loading = false;

  constructor(private router : Router){}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.loading = false;
      }

      console.log(this.loading);
    })
  }

  

}
