import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-todo-list',
  imports: [MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  @Input() public todoList: string[] = [];

  @Output() public onDeleteItem = new EventEmitter<string>();

  public deleteItem(itemName: string): void {
    this.onDeleteItem.emit(itemName);
  }
}
