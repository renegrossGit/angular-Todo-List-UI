# Angular Todo UI

This project represents the **user interface** of a simple Angular Todo app built using Angular 19. The app features a clean and user-friendly design, with a responsive layout that adapts to various screen sizes. The app includes various UI components such as Header, Filter, Main, Footer, and individual Todo items, all of which are styled to ensure a visually appealing and accessible interface.

## UI Components:
- **Header**: Displays the app title and a styled input field for adding new todos.
- **Filter**: Allows users to filter todos by All, Active, or Completed states (styled as clickable options).
- **Main**: Contains the todo list with checkboxes for toggling the completion of items (styled for clear visibility).
- **Footer**: Shows the total number of todo items and a **"Clear All"** button (styled for prominence and easy access).

## Features:
- **Responsive Design**: The layout adapts seamlessly to different screen sizes, from desktop to mobile.
- **Clean and Modern Look**: The app follows a minimalistic design with well-spaced components for an organized and uncluttered view.
- **Symmetric Layout**: Components are aligned for a symmetrical and balanced appearance.
- **Mobile-Friendly**: On smaller screens, elements like buttons take up full width for better usability.
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