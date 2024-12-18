import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  newTodo: string = ''; // Model for binding the input value

  // Method to handle adding a new Todo
  addTodo() {
    if (this.newTodo.trim()) {
      console.log('New Todo:', this.newTodo);  // You can later integrate this with a service to add the Todo to a list
      this.newTodo = ''; // Clear the input field after submission
    }
  }
}
