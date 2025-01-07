import { Component, computed, Signal } from '@angular/core';
import { TodosServiceService } from './../../service/todos-service.service';
import { TodoInterface } from './../../types/todo-interface';
import { TodoComponent } from './todo/todo.component';
import { NgFor } from '@angular/common';
import { FilterEnum } from '../../types/filter-enum';
import { SharedModule } from '../shared/shared.module';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TodoComponent, NgFor, SharedModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  todosView: Signal<TodoInterface[]>;


  constructor(private todosService: TodosServiceService) {
    // Get the filtered todos (todosView) from the service
    this.todosView = this.todosService.getTodosView();
  }

    // Computed signal to check if all todos are selected
    isAllTodosSelected = computed(() =>
      this.todosService.getTodos()().every((todo) => todo.completed)
    );

    onToggleAllTodos(event: Event): void {
      const isChecked = (event.target as HTMLInputElement)?.checked || false;
      this.toggleAllTodos(isChecked);
    }
    
  toggleAllTodos(completed: boolean): void {
    this.todosService.toggleAll(completed);
  }

  areAllCompleted(): boolean {
    return this.todosService.areAllTodosCompleted();
  }

  toggleTodo(id: number): void {
    this.todosService.toggleTodo(id);
  }

  deleteTodo(id: number): void {
    this.todosService.deleteTodo(id);
  }

  editTodo(updatedTodo: TodoInterface): void {
    this.todosService.editTodo(updatedTodo);
  }
}
