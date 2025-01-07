import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosServiceService } from '../../service/todos-service.service';
import { SharedModule } from '../shared/shared.module';
import { TestService } from '../shared/test.service';
import { TodosDaoService } from '../../service/todos-dao.service';
import { TodoInterface } from '../../types/todo-interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  newTodo: string = ''; // Model for binding the input value
  

  constructor(private todoService: TodosServiceService, private dataService: TodosDaoService) {}

  // Method to handle adding a new Todo
  addTodo(): void {
    if (this.newTodo.trim() !== '') {
      this.todoService.addTodo(this.newTodo); 
      this.newTodo = '';
    }
  }

/*   ngOnInit(): void {
    // Create a new todo when the website loads
    const newTodo: TodoInterface = { task: 'New Todo on Init', completed: false };
    const updatedTodo: TodoInterface = { task: 'Updated Todo', completed: true };
    let createdTodoId: number = 2;
    
    this.dataService.getTodos().subscribe(
      (response) => {
        console.log('getAllTodos Response:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );

    this.dataService.getTodoById(1).subscribe(
      (response) => {
        console.log('getTodoById Response:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );

    this.dataService.createTodo(newTodo).subscribe(
      (response) => {
        console.log('createTodo Response:', response);
        createdTodoId = response.id ?? 2;
      }
    );

    this.dataService.updateTodo(1, updatedTodo).subscribe(
      (updateResponse) => {
        console.log('updateTodo Response:', updateResponse);
      }
    )
 */
    // Delete the updated todo
/*     this.dataService.deleteTodo(3).subscribe(
      () => {
      console.log('deleteTodo Response: Todo deleted');
      }
    ) */

  //}
}
