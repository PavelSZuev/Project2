import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { todoItems } from './data/todoitems';
import { NgFor } from "@angular/common"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDo';
  items = todoItems;
}
