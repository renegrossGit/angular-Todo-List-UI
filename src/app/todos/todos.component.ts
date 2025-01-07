import { Component } from '@angular/core';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodosServiceService } from './service/todos-service.service';
import { SharedModule } from './components/shared/shared.module';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FilterComponent,HeaderComponent,MainComponent, FooterComponent, SharedModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  constructor(private todosService: TodosServiceService) {}
}
