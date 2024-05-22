import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'new-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.scss',
})
export class NewPageComponent {

  constructor(private router : Router) {    
  }
}