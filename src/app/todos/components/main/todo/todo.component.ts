import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoInterface } from '../../../types/todo-interface';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgClass, NgIf, FormsModule, SharedModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() todo!: TodoInterface;
  @Output() toggle = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<TodoInterface>();

  isEditing = false;
  editedTask = '';

  enterEditMode(): void {
    this.isEditing = true;
    this.editedTask = this.todo.task;
  }

  saveEdit(): void {
    if (this.editedTask.trim()) {
      this.edit.emit({ ...this.todo, task: this.editedTask });
    }
    this.isEditing = false;
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.editedTask = '';
  }
}
