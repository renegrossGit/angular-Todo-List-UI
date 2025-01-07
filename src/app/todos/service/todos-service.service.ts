import { Injectable, Signal, signal } from '@angular/core';
import { TodoInterface } from './../types/todo-interface'; // Importiere das Todo-Interface
import { FilterEnum } from './../types/filter-enum';
import { TodosDaoService } from './todos-dao.service';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {
  private todos = signal<TodoInterface[]>([]);
  private todosView = signal<TodoInterface[]>([]); // Filtered list for the view
  private currentFilter = signal<FilterEnum>(FilterEnum.ALL); // Current active filter

  constructor(private todosDaoService: TodosDaoService) {
    // Load initial todos from the backend
    this.loadTodos();
  }

  private loadTodos(): void {
    this.todosDaoService.getTodos().pipe(
      tap((todos) => {
        this.todos.set(todos);
        this.applyFilter();
      })
    ).subscribe();
  }

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
    this.todosDaoService.createTodo(newTodo).pipe(
      tap((todo) => {
        this.todos.update((todos) => [...todos, todo]);
        this.applyFilter();
      })
    ).subscribe();
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
    //console.log('View Todos:', this.todosView());
  }


  toggleTodoCompleted(id: number): void {
    this.todosDaoService.getTodoById(id).pipe(
      tap((todo) => {
        if (todo) {
          todo.completed = !todo.completed;
          this.todosDaoService.updateTodo(id, todo).pipe(
            tap(() => {
              this.todos.update((todos) =>
                todos.map((t) => (t.id === id ? { ...t, completed: todo.completed } : t))
              );
              this.applyFilter();
            })
          ).subscribe();
        }
      })
    ).subscribe();
  }

  toggleAll(completed: boolean): void {
    this.todos().forEach((todo) => {
      if (todo.id !== undefined) { // Ensure todo.id is defined
        todo.completed = completed;
        this.todosDaoService.updateTodo(todo.id, todo).pipe(
          tap(() => {
            this.todos.update((todos) =>
              todos.map((t) => (t.id === todo.id ? { ...t, completed } : t))
            );
            this.applyFilter();
          })
        ).subscribe();
      } else {
        console.error('Todo ID is undefined:', todo);
      }
    });
  }

    areAllTodosCompleted(): boolean {
      return this.todos().every((todo) => todo.completed);
    }

    toggleTodo(id: number): void {
      this.todosDaoService.getTodoById(id).pipe(
        tap((todo) => {
          if (todo) {
            todo.completed = !todo.completed;
            this.todosDaoService.updateTodo(id, todo).pipe(
              tap(() => {
                this.todos.update((todos) =>
                  todos.map((t) => (t.id === id ? { ...t, completed: todo.completed } : t))
                );
                this.applyFilter();
              })
            ).subscribe();
          }
        })
      ).subscribe();
    }

    deleteTodo(id: number): void {
      this.todosDaoService.deleteTodo(id).pipe(
        tap(() => {
          this.todos.update((todos) => todos.filter((todo) => todo.id !== id));
          this.applyFilter();
        })
      ).subscribe();
    }
    
    editTodo(updatedTodo: TodoInterface): void {
      if (updatedTodo.id !== undefined) { // Ensure updatedTodo.id is defined
        this.todosDaoService.updateTodo(updatedTodo.id, updatedTodo).pipe(
          tap(() => {
            this.todos.update((todos) =>
              todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
            );
            this.applyFilter();
          })
        ).subscribe();
      } else {
        console.error('Todo ID is undefined:', updatedTodo);
      }
    }

    clearAllTodos(): void {
      this.todos().forEach((todo) => {
        if (todo.id !== undefined) { // Ensure todo.id is defined
          this.todosDaoService.deleteTodo(todo.id).pipe(
            tap(() => {
              this.todos.update((todos) => todos.filter((t) => t.id !== todo.id));
              this.applyFilter();
            })
          ).subscribe();
        } else {
          console.error('Todo ID is undefined:', todo);
        }
      });
    }
}
