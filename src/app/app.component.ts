import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from './template/header-component/header-component.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponentComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MuskitoBlog';
}
