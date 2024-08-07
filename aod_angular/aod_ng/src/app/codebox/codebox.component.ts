import { Component, Input } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-codebox',
  standalone: true,
  imports: [Highlight,MatCardModule],
  templateUrl: './codebox.component.html',
  styleUrl: './codebox.component.css',
})

export class CodeboxComponent {
  @Input({ required: true }) code!: string;
  @Input({ required: true }) title!: string;
}
