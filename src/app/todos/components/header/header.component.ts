import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosServiceService } from '../../service/todos-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  newTodo: string = ''; // Model for binding the input value

  constructor(private todoService: TodosServiceService) {}

  // Method to handle adding a new Todo
  addTodo(): void {
    if (this.newTodo.trim() !== '') {
      this.todoService.addTodo(this.newTodo); 
      this.newTodo = '';
    }
  }
}
