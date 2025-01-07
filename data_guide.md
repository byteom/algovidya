 
# AlgoVidya Data Guide

## Overview

This guide outlines the data structure and storage methods used in the AlgoVidya project. It covers how different types of data are organized, stored, and managed within the application.

## Data Types and Structures

### 1. Questions Data

Questions are the core data type in AlgoVidya. They are stored in a structured format to facilitate easy retrieval and display.

```typescript
export interface Question {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  platforms: string[];
  companies: string[];
  solution: {
    text: string;
    code: {
      cpp: string;
      java: string;
      javascript: string;
    }
  };
  videos: {
    id: number;
    title: string;
    language: string;
    url: string;
  }[];
}
```

- Storage: Questions are stored in the `data/questions.ts` file as an array of `Question` objects.
- Usage: This data is imported and used throughout the application for displaying questions, filtering, and search functionality.


### 2. User Progress Data

User progress is crucial for tracking individual learning journeys. It's stored locally to allow for offline usage.

```typescript
interface Progress {
  completedQuestions: number[];
  lastVisited: number | null;
}
```

- Storage: User progress is stored in the browser's localStorage.
- Management: The `useProgress` hook (`hooks/use-progress.ts`) manages this data, providing functions to update and retrieve progress information.


### 3. Custom Lists

Users can create custom lists of questions for personalized study plans.

```typescript
interface CustomList {
  id: string;
  name: string;
  questions: number[];
}
```

- Storage: Custom lists are stored in localStorage.
- Management: The `useCustomLists` hook (`hooks/use-custom-lists.ts`) handles the creation, updating, and deletion of custom lists.


### 4. Question Sets

Predefined sets of questions are available for different study plans.

```typescript
export type QuestionSet = '450' | '300' | '150' | '100' | '75';

export const questionSets: Record<QuestionSet, Question[]> = {
  '450': questions,
  '300': questions.slice(0, 300),
  '150': questions.slice(0, 150),
  '100': questions.slice(0, 100),
  '75': questions.slice(0, 75),
};
```

- Storage: Question sets are defined in `constants/question-sets.ts`.
- Usage: These sets are used to provide curated lists of questions for different learning paths.


## Data Storage Methods

1. **Local Storage**: Used for storing user-specific data that needs to persist across sessions but doesn't require server-side storage. This includes:

1. User progress
2. Custom lists
3. Theme preferences



2. **In-Memory / Static Files**: For data that doesn't change frequently and is the same for all users:

1. Questions database (`data/questions.ts`)
2. Question sets (`constants/question-sets.ts`)



3. **State Management**: React's useState and custom hooks are used for managing temporary state within components.


## Data Flow

1. On initial load, the application reads data from local storage (if available) to set up the user's environment.
2. As the user interacts with the app (solving questions, creating lists), data is updated in both the application state and local storage.
3. Question data is loaded from static files and filtered/processed as needed for display.


## Data Management Components

1. `components/data-management.tsx`: Provides functionality for users to export and import their progress data.
2. `components/progress-dashboard.tsx`: Visualizes user progress data.
3. `components/question-recommender.tsx`: Uses progress data to recommend questions.


## Security and Privacy Considerations

1. All user data is stored locally, ensuring privacy and reducing server-side data management complexity.
2. Users are advised to use the data export feature regularly to backup their progress.
3. The application does not collect or store any personal information beyond what the user inputs for their learning progress.


## Future Data Management Considerations

1. **Server-side Storage**: As the platform grows, consider implementing server-side storage for user data to allow cross-device synchronization and more robust data management.
2. **Database Integration**: For scalability, consider moving the questions database to a proper database system (e.g., MongoDB) instead of static files.
3. **API Development**: Create a backend API to handle data operations, which would be necessary for implementing server-side storage and more complex features.


## Conclusion

The current data management strategy in AlgoVidya prioritizes simplicity, privacy, and offline accessibility. As the platform evolves, more sophisticated data management techniques may be implemented to enhance functionality and user experience.

 