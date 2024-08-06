import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculateComponent } from './calculate/calculate.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CalculateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aod_ng';
}
