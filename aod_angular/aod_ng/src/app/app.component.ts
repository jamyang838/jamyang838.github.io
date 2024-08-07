import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculateComponent } from './calculate/calculate.component'; 
import {CodeboxComponent } from './codebox/codebox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CalculateComponent,CodeboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aod_m200';
}
