# Implementation of Angular Components

In this Angular Todo List application, several components were created to handle various parts of the user interface. The components were designed to be modular and reusable, allowing for a clear separation of concerns and an organized codebase.

## List of Components:

### header.component.html:

- Purpose: The HeaderComponent is responsible for the top part of the application. It includes the input field where the user can add new todo items and a button to trigger the creation of a todo.
- Features:

    - Displays the application title ("Todo Manager").
    - Contains an input field with two-way binding to capture user input for new todos.
    - Provides an "Add Todo" button that is disabled unless the input is valid.

## filter.component.html:

- Purpose: The FilterComponent is responsible for filtering the todo list based on different categories: All, Active, and Completed.
- Features:
   - Displays a set of filter options.
   - Allows the user to toggle between different filters, updating the todo list based on their selection.

## main.component.html:

- Purpose: The MainComponent is the main body of the todo application. It displays the list of todo items, allows marking todos as completed, and provides the option to select all todos at once.
- Features:
   - Displays a list of TodoComponent items, each representing a todo.
   - Includes a "Mark all as completed" checkbox at the top that updates all todos' completed status.
   - Allows the user to interact with each individual todo item.

## todo.component.html:

- Purpose: The TodoComponent is responsible for representing a single todo item in the list. It handles actions like toggling completion and deleting a todo item.
- Features:
   - Displays the todo item text.
   - Contains a checkbox for marking the todo as completed.
   - Includes a delete button to remove the todo item from the list.

## footer.component.html:

- Purpose: The FooterComponent is responsible for displaying the count of remaining todos and provides a "Clear All" button to delete all todos at once.
- Features:
   - Displays the count of remaining todos.
   - Includes a button that clears all todos when clicked.

## Component Communication:

In this application, the components communicate via Angular's services and input/output properties.

- TodosService: The TodosService is used to manage the state of the todos. It provides methods to add, delete, update, and filter todos.
- Parent-child communication: Data flows from parent components (e.g., MainComponent) to child components (e.g., TodoComponent) using @Input() and events are emitted from child components to parents using @Output().

## Key Design Principles:

- Modularity: Each Angular component is self-contained with its own HTML, CSS, and logic. This ensures that the components are reusable and maintainable.
- Two-way binding: The ngModel directive is used for two-way binding, allowing the app to respond instantly to user input (e.g., marking a todo as completed).
- Component interaction: Components interact with each other using Angular's event binding and property binding mechanisms.
---

## Installation

Follow these steps to set up the project locally:

### Prerequisites:
1. **Node.js**: Ensure that you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
2. **Angular CLI**: If you don't have Angular CLI installed, run the following command to install it globally:
   ```bash
   npm install -g @angular/cli

### Install Dependencies
```bash
npm install
```
### Run the Application
```bash
ng serve
```

The app will now be available at http://localhost:4200.

## Notes

### Is the user interface visually appealing and easy to navigate?

- The Filter section uses styled links that provide a clean way to categorize and view todos, even though no functionality is connected yet.

### Does the interface layout adapt well to different screen sizes and orientations?

- The app's interface is fully responsive, meaning it adapts to small and large screen sizes without breaking the layout.
- On small screens, the "Clear All" button takes up the entire width of the screen for easier interaction.


### Does the interface include the required components and features, such as forms and buttons?

Yes, the interface includes all required components and features:
- **Header**: A form with an input field for adding new Todo items, using Angular's template-driven forms.
- **Todo List**: Displays Todo items with checkboxes (functionality not yet implemented).
- **Footer**: Shows the number of Todo items and includes a "Clear All" button (functionality not implemented).
- **Buttons**: Interactive buttons for adding and clearing Todos, styled for easy use.

The interface meets the design requirements with forms and buttons, ensuring a user-friendly experience.

### Are the components correctly implemented and functional?
- Yes, the components are correctly implemented and functional, with clear separation of concerns and proper communication between them using inputs, outputs, and services.

### Are data bindings and directives used correctly to manipulate the UI?
- Yes, data bindings and directives such as ngModel, ngFor, and ngIf are used correctly to bind data and dynamically manipulate the UI based on the application's state.

### Is the UI updated dynamically in response to user input or changes in data?
- Yes, the UI is updated dynamically in response to user input or changes in data, with two-way binding and signals ensuring that the interface reflects the latest state of the todos.

### Are directives used to conditionally display or hide UI elements?
- Yes, directives like ngIf and ngClass are used to conditionally display or hide UI elements based on the application's logic, such as showing completed tasks or applying filters.