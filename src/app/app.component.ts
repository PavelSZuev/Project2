import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { todoItems } from './data/todoitems';
import { NgFor } from "@angular/common"
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild("pole") todoInputValue: ElementRef<HTMLInputElement> = null!;
  title = 'ToDo';
  items = todoItems;
  addText(text:string):void{
    if (text.trim() !== "") {
    const date = new Date();
    const ms = date.getTime();
    this.items.push({ id: ms, name: text, isCompete: false })
    this.todoInputValue.nativeElement.value = "";
    }
  }  
  delText(itemToDelete:number){
    this.items = this.items.filter((item) => item.id !== itemToDelete)
  }
}

