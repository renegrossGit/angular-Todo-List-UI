import { Injectable, Signal, signal } from '@angular/core';
import { TodoInterface } from './../types/todo-interface'; // Importiere das Todo-Interface
import { FilterEnum } from './../types/filter-enum';


@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {
  private todos = signal<TodoInterface[]>([]);
  private todosView = signal<TodoInterface[]>([]); // Filtered list for the view
  private currentFilter = signal<FilterEnum>(FilterEnum.ALL); // Current active filter

  getTodos(): Signal<TodoInterface[]> {
    return this.todos;
  }

  getTodosView(): Signal<TodoInterface[]> {
    return this.todosView;
  }

  getCurrentFilter(): Signal<FilterEnum> {
    return this.currentFilter;
  }

  addTodo(task: string): void {
    const newTodo: TodoInterface = {
      id: Date.now(),
      task,
      completed: false,
    };
    this.todos.update((todos) => [...todos, newTodo]);
    this.applyFilter(); // Reapply filter after adding a todo
    console.log('Aktuelle Todos:', this.todos());
  }

  // Set a new filter
  setFilter(filter: FilterEnum): void {
    this.currentFilter.set(filter);
    this.applyFilter(); // Reapply filter when filter changes
  }

  // Apply the current filter to the todos
  private applyFilter(): void {
    const filter = this.currentFilter();
    const filteredTodos = this.todos().filter((todo) => {
      switch (filter) {
        case FilterEnum.COMPLETED:
          return todo.completed;
        case FilterEnum.ACTIVE:
          return !todo.completed;
        case FilterEnum.ALL:
        default:
          return true;
      }
    });
    this.todosView.set(filteredTodos); // Update the filtered view
    console.log('View Todos:', this.todosView());
  }


    // Toggle the completed state of a Todo
    toggleTodoCompleted(id: number): void {
      this.todos.update((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
      this.applyFilter(); // Reapply filter after toggling
    }

    toggleAll(completed: boolean): void {
      const updatedTodos = this.todos().map((todo) => ({
        ...todo,
        completed,
      }));
      this.todos.set(updatedTodos);
      this.applyFilter(); // Update the view
    }

    areAllTodosCompleted(): boolean {
      return this.todos().every((todo) => todo.completed);
    }

    toggleTodo(id: number): void {
      const updatedTodos = this.todos().map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      this.todos.set(updatedTodos);
      this.applyFilter();
    }

    deleteTodo(id: number): void {
      const updatedTodos = this.todos().filter((todo) => todo.id !== id);
      this.todos.set(updatedTodos);
      this.applyFilter();
    }
    
    editTodo(updatedTodo: TodoInterface): void {
      const updatedTodos = this.todos().map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      );
      this.todos.set(updatedTodos);
      this.applyFilter();
    }

    clearAllTodos(): void {
      // Set the `todos` signal to an empty array, which clears all the todos
      this.todos.set([]);
    }
}
