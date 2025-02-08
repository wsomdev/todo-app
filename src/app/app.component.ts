import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ITodo } from './interfaces/todo.interface';
import { StringHelper } from './helpers/string.helper';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    TodoListComponent,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public todos: ITodo[] = [
    { name: 'TODO 1', isDone: false, id: StringHelper.getMostlyUniqId() },
    { name: 'TODO 2', isDone: false, id: StringHelper.getMostlyUniqId() },
    { name: 'TODO 3', isDone: false, id: StringHelper.getMostlyUniqId() },
  ];

  public fc = new FormControl();

  public addItemInList(): void {
    if (this.fc.value) {
      this.todos.push(this.fc.value);
      this.fc.reset();
    }
  }

  public removeItemFromList(id: string): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
