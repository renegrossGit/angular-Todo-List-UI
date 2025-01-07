import { Component, computed } from '@angular/core';
import { TodosServiceService } from '../../service/todos-service.service';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private todosService: TodosServiceService) {}

  // Computed signal to calculate remaining todos
  remainingTodos = computed(() => 
    this.todosService.getTodos()().filter((todo) => !todo.completed).length
  );

  // Method to clear all todos and reload the page
  onClearAllTodos(): void {
    this.todosService.clearAllTodos(); // Clear todos in the service
    window.location.reload(); // Reload the page to reflect the changes
  }
}
