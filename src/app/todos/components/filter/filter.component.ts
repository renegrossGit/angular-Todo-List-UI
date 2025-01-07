import { Component, Signal } from '@angular/core';
import { FilterEnum } from '../../types/filter-enum';
import { TodosServiceService } from '../../service/todos-service.service';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  // Signal to store the current filter
  FilterEnum = FilterEnum;
  currentFilter: Signal<FilterEnum>;

  constructor(private todosService: TodosServiceService) {
    // Subscribe to the current filter state from the service
    this.currentFilter = this.todosService.getCurrentFilter();
  }

  // Set a new filter by interacting with the service
  setFilter(filter: FilterEnum): void {
    this.todosService.setFilter(filter);
  }
}
