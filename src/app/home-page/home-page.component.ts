import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {

  constructor(private router : Router) {    
  }

  goToNewPage = () => {
    this.router.navigateByUrl('/new-page');
  }
}