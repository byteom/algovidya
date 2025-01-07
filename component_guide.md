# AlgoVidya Component Guide

This guide provides an overview of the key components in the AlgoVidya project, explaining their purpose, functionality, and role in the overall architecture.

## Layout Components

### 1. app/layout.tsx
- **Purpose**: Serves as the root layout for the entire application.
- **Function**: 
  - Wraps all pages with common elements like the `ThemeProvider`.
  - Imports global styles.
  - Sets up metadata for SEO.
- **Importance**: Ensures consistent layout and theming across all pages.

### 2. components/navigation.tsx
- **Purpose**: Provides the main navigation bar for the application.
- **Function**:
  - Displays links to main sections of the app.
  - Implements responsive design for mobile and desktop.
  - Includes theme toggle and "Buy Me a Coffee" button.
- **Importance**: Crucial for user navigation and overall user experience.

### 3. components/footer.tsx
- **Purpose**: Displays the footer section on all pages.
- **Function**:
  - Shows copyright information.
  - Provides links to important pages and resources.
  - Includes social media links and newsletter signup.
- **Importance**: Enhances user navigation and provides additional information.

## Page Components

### 4. app/page.tsx
- **Purpose**: Serves as the homepage of AlgoVidya.
- **Function**:
  - Introduces users to the platform.
  - Showcases key features and statistics.
  - Provides quick access to different question sets.
- **Importance**: Creates the first impression and guides users to key areas of the app.

### 5. app/questions/page.tsx
- **Purpose**: Displays the list of DSA questions.
- **Function**:
  - Allows users to browse, filter, and search questions.
  - Implements pagination for better performance.
  - Shows question details like difficulty, category, and companies.
- **Importance**: Core functionality of the app, where users interact with DSA problems.

### 6. app/questions/[id]/page.tsx
- **Purpose**: Displays individual question details.
- **Function**:
  - Shows full question description, difficulty, and related companies.
  - Provides solution in multiple programming languages.
  - Allows users to mark questions as completed.
- **Importance**: Crucial for users to learn and practice DSA concepts.

### 7. app/solved-questions/page.tsx
- **Purpose**: Shows the list of questions solved by the user.
- **Function**:
  - Displays user's progress.
  - Allows users to review completed questions.
- **Importance**: Helps users track their learning progress.

## Functional Components

### 8. components/progress-dashboard.tsx
- **Purpose**: Visualizes user's learning progress.
- **Function**:
  - Shows completion percentage for different question sets.
  - Displays total solved questions.
- **Importance**: Motivates users by showcasing their achievements.

### 9. components/question-recommender.tsx
- **Purpose**: Provides personalized question recommendations.
- **Function**:
  - Uses AI to suggest questions based on user's progress and performance.
  - Displays recommended question with difficulty and category.
- **Importance**: Enhances learning experience by providing tailored content.

### 10. components/data-management.tsx
- **Purpose**: Allows users to manage their progress data.
- **Function**:
  - Provides options to download and upload progress data.
  - Ensures data portability and backup.
- **Importance**: Crucial for data persistence and user trust.

## Utility Components

### 11. components/theme-provider.tsx
- **Purpose**: Manages the application's theme (light/dark mode).
- **Function**:
  - Wraps the application with theme context.
  - Allows theme switching functionality.
- **Importance**: Enhances user experience by providing theme options.

### 12. hooks/use-progress.ts
- **Purpose**: Custom hook for managing user progress.
- **Function**:
  - Provides functions to mark questions as completed or uncompleted.
  - Manages the state of user's progress.
- **Importance**: Central to tracking user's learning journey.

### 13. hooks/use-custom-lists.ts
- **Purpose**: Custom hook for managing user-created question lists.
- **Function**:
  - Allows creation, deletion, and modification of custom lists.
  - Manages the state of user's custom lists.
- **Importance**: Enhances personalization by allowing users to create their own study plans.

## Data and Constants

### 14. data/questions.ts
- **Purpose**: Stores the database of DSA questions.
- **Function**:
  - Defines the structure of question objects.
  - Provides a comprehensive list of DSA problems.
- **Importance**: Core data that powers the entire application.

### 15. constants/question-sets.ts
- **Purpose**: Defines different sets of questions (e.g., 450 DSA, 300 DSA).
- **Function**:
  - Groups questions into predefined sets.
  - Allows easy access to different question collections.
- **Importance**: Enables structured learning paths for users.

## Styling and Configuration

### 16. app/globals.css
- **Purpose**: Provides global styles for the application.
- **Function**:
  - Defines base styles, including Tailwind directives.
  - Sets up custom CSS variables for theming.
- **Importance**: Ensures consistent styling across the application.

### 17. tailwind.config.js
- **Purpose**: Configures Tailwind CSS for the project.
- **Function**:
  - Customizes Tailwind's default theme.
  - Defines custom utilities and plugins.
- **Importance**: Crucial for maintaining a consistent and efficient styling system.

## Conclusion

Each component in the AlgoVidya project plays a vital role in creating a comprehensive and user-friendly platform for learning Data Structures and Algorithms. By understanding the purpose and function of each component, developers can more effectively maintain, update, and expand the application's functionality.

