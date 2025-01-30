## 📚 About AlgoVidya

AlgoVidya is a cutting-edge platform designed to help you master Data Structures and Algorithms (DSA) through interactive learning experiences. Whether you're preparing for technical interviews or aiming to enhance your problem-solving skills, AlgoVidya provides a comprehensive suite of tools and resources to support your journey.

## ✨ Features

- 🧠 **Curated Question Sets**: From 75 to 450 DSA questions, tailored for different learning stages
- 💻 **Multi-language Solutions**: Detailed solutions in C++, Java, and JavaScript
- 🎥 **Video Explanations**: In-depth video tutorials in English and Hindi
- 📊 **Progress Tracking**: Monitor your learning journey with detailed analytics
- 🤖 **AI-powered Recommendations**: Get personalized question suggestions based on your progress
- 🌐 **Platform Integration**: Solve problems directly on LeetCode or GeeksForGeeks
- 👥 **Community Support**: Join our WhatsApp group for discussions and doubt-clearing
- 💾 **Data Management**: Download and upload your progress data for backup and restoration
- ⚠️ **Warning System**: Receive alerts before closing the page to prevent accidental data loss
- 🏆 **Leaderboard**: Compete with other learners and track your ranking
- 📅 **Daily Challenges**: Solve a new problem every day to maintain your streak
- 🎯 **Company-wise Questions**: Practice problems frequently asked by top tech companies
- 📚 **Topic-wise Practice**: Focus on specific DSA topics to strengthen your skills
- 🔍 **Advanced Search and Filtering**: Easily find questions based on difficulty, company, platform, and more

-  ---

 ## Algovidya Project Structure

This document provides an overview of the project structure and explains the purpose of each directory and file in the Algovidya repository.

---

## Table of Contents
1. [Root Directory](#root-directory)
2. [.git Directory](#git-directory)
3. [app Directory](#app-directory)
4. [components Directory](#components-directory)
5. [constants Directory](#constants-directory)
6. [data Directory](#data-directory)
7. [hooks Directory](#hooks-directory)
8. [lib Directory](#lib-directory)
9. [Configuration Files](#configuration-files)
10. [Guides and Documentation](#guides-and-documentation)

---

## Root Directory
The root directory contains configuration files, documentation, and the main project structure.

- **.dockerignore**: Specifies files and directories to ignore when building a Docker image.
- **.eslintrc.json**: ESLint configuration file for linting JavaScript/TypeScript code.
- **.gitignore**: Specifies files and directories to ignore in Git version control.
- **app_guide.md**: Documentation for the `app` directory and its components.
- **backendHelper.md**: Documentation for backend-related functionality.
- **components.json**: Configuration file for UI components.
- **component_guide.md**: Documentation for reusable components.
- **data_guide.md**: Documentation for data handling and structure.
- **Dockerfile**: Instructions for building a Docker image for the project.
- **LICENSE**: The license file for the project.
- **next-env.d.ts**: TypeScript declarations for Next.js environment variables.
- **next.config.mjs**: Next.js configuration file.
- **package-lock.json**: Automatically generated file for npm dependencies.
- **package.json**: Contains project metadata and dependencies.
- **postcss.config.js**: PostCSS configuration file.
- **postcss.config.mjs**: Alternative PostCSS configuration file.
- **projectTree.md**: Documentation of the project's directory structure.
- **README.md**: The main README file for the project.
- **tailwind.config.js**: Tailwind CSS configuration file.
- **tailwind.config.ts**: TypeScript version of the Tailwind CSS configuration file.
- **tsconfig.json**: TypeScript configuration file.

---

## .git Directory
This directory contains Git-related files and metadata for version control.

- **hooks/**: Sample Git hooks for automating tasks during the Git workflow.
- **info/exclude**: Specifies files to ignore in Git version control.
- **logs/**: Contains logs of Git operations, such as branch updates and commits.
- **objects/**: Stores Git objects (e.g., commits, trees, blobs) for version control.
- **refs/**: Contains references to branches, tags, and remote repositories.
- **COMMIT_EDITMSG**: Temporary file for storing commit messages.
- **config**: Git configuration file for the repository.
- **description**: Repository description file.
- **FETCH_HEAD**: Temporary file for storing fetched references.
- **HEAD**: Points to the current branch or commit.
- **index**: Git index file for staging changes.
- **packed-refs**: Packed references for efficient storage.

---

## app Directory
The `app` directory contains the main application code, including pages and fonts.

- **community/page.tsx**: Page for community-related content.
- **company-wise-questions/page.tsx**: Page for company-specific coding questions.
- **creator/page.tsx**: Page for content creators.
- **daily-challenge/page.tsx**: Page for daily coding challenges.
- **dsa-challenge/page.tsx**: Page for Data Structures and Algorithms (DSA) challenges.
- **fonts/**: Contains custom fonts used in the project.
  - **GeistMonoVF.woff**: Geist Mono variable font.
  - **GeistVF.woff**: Geist variable font.
- **instructions/page.tsx**: Page for instructions or guidelines.
- **interview-preparation/page.tsx**: Page for interview preparation resources.
- **leaderboard/page.tsx**: Page for displaying the leaderboard.
- **questions/**: Contains pages related to coding questions.
  - **[id]/**: Dynamic route for individual questions.
    - **page.tsx**: Page for displaying a specific question.
    - **question-detail.tsx**: Component for question details.
  - **page.tsx**: Main page for browsing questions.
- **solved-questions/page.tsx**: Page for displaying solved questions.
- **topic-wise-practice/page.tsx**: Page for topic-wise practice questions.
- **favicon.ico**: Favicon for the website.
- **globals.css**: Global CSS styles for the application.
- **layout.tsx**: Layout component for the application.
- **page.tsx**: Main page of the application.

---

## components Directory
The `components` directory contains reusable UI components and utility components.

- **ui/**: Reusable UI components built with a design system.
  - **alert-dialog.tsx**: Alert dialog component.
  - **alert.tsx**: Alert component.
  - **avatar.tsx**: Avatar component.
  - **badge.tsx**: Badge component.
  - **button.tsx**: Button component.
  - **card.tsx**: Card component.
  - **checkbox.tsx**: Checkbox component.
  - **dialog.tsx**: Dialog component.
  - **dropdown-menu.tsx**: Dropdown menu component.
  - **input.tsx**: Input component.
  - **progress.tsx**: Progress bar component.
  - **select.tsx**: Select dropdown component.
  - **tabs.tsx**: Tabs component.
  - **textarea.tsx**: Textarea component.
  - **toast.tsx**: Toast notification component.
  - **toaster.tsx**: Toaster component for displaying toasts.
  - **use-toast.ts**: Hook for managing toast notifications.
- **animated-card.tsx**: Animated card component.
- **animated-feature.tsx**: Animated feature component.
- **animated-hero.tsx**: Animated hero section component.
- **code-editor.tsx**: Code editor component.
- **custom-lists-manager.tsx**: Component for managing custom lists.
- **daily-challenge.tsx**: Component for daily challenges.
- **data-management.tsx**: Component for data management.
- **difficulty-meter.tsx**: Component for displaying question difficulty.
- **discussion.tsx**: Component for discussions.
- **footer.tsx**: Footer component.
- **how-to-use.tsx**: Component for usage instructions.
- **leaderboard.tsx**: Leaderboard component.
- **navigation.tsx**: Navigation component.
- **problem-of-the-day.tsx**: Component for the problem of the day.
- **progress-analytics.tsx**: Component for progress analytics.
- **progress-dashboard.tsx**: Progress dashboard component.
- **progress-tracker.tsx**: Progress tracker component.
- **question-recommender.tsx**: Component for recommending questions.
- **related-questions.tsx**: Component for displaying related questions.
- **solved-questions.tsx**: Component for solved questions.
- **storage-warning.tsx**: Component for storage warnings.
- **theme-provider.tsx**: Theme provider component.
- **toast.tsx**: Toast notification component.
- **toaster.tsx**: Toaster component.
- **use-toast.ts**: Hook for toast notifications.
- **warning-modal.tsx**: Warning modal component.
- **welcome-modal.tsx**: Welcome modal component.

---

## constants Directory
The `constants` directory contains constant values used throughout the application.

- **question-sets.ts**: Constants for question sets.

---

## data Directory
The `data` directory contains data-related files.

- **problem-of-the-day.ts**: Data for the problem of the day.
- **questions.ts**: Data for coding questions.

---

## hooks Directory
The `hooks` directory contains custom React hooks.

- **use-app-data.ts**: Hook for managing application data.
- **use-custom-lists.ts**: Hook for managing custom lists.
- **use-learning-path.ts**: Hook for managing learning paths.
- **use-progress.ts**: Hook for tracking user progress.
- **use-toast.ts**: Hook for toast notifications.

---

## lib Directory
The `lib` directory contains utility functions and libraries.

- **utils.ts**: Utility functions for the application.

---

## Configuration Files
- **.dockerignore**: Specifies files to ignore in Docker builds.
- **.eslintrc.json**: ESLint configuration.
- **.gitignore**: Specifies files to ignore in Git.
- **next.config.mjs**: Next.js configuration.
- **postcss.config.js**: PostCSS configuration.
- **tailwind.config.js**: Tailwind CSS configuration.
- **tsconfig.json**: TypeScript configuration.

---

## Guides and Documentation
- **app_guide.md**: Guide for the `app` directory.
- **backendHelper.md**: Backend-related documentation.
- **component_guide.md**: Guide for reusable components.
- **data_guide.md**: Guide for data handling.
- **projectTree.md**: Documentation of the project structure.
- **README.md**: Main README file.

---
 
## 🛠 Installation  

### **Prerequisites**  
- **Node.js**: Ensure you have Node.js installed on your system.  
- **npm or yarn**: A package manager like npm or yarn is required.  

### **Steps**  

1. Clone the repository:  
   ```bash
   git clone https://github.com/byteom/algovidya.git
   cd algovidya
   ```  

2. Install dependencies:  
   ```bash
   npm install  
   ```  
   Or, if using yarn:  
   ```bash
   yarn install  
   ```  

3. Start the development server:  
   ```bash
   npm run dev  
   ```  
   Or with yarn:  
   ```bash
   yarn dev  
   ```  

4. Open the app in your browser:  
   Visit `http://localhost:3000` to start using AlgoVidya.  

---

## 🌟 Contributing  

We welcome contributions from developers around the globe! Whether it's fixing a bug, adding a feature, or improving documentation, your contributions make AlgoVidya better for everyone.  

### **How to Contribute**  
1. Fork the repository and clone it locally.  
2. Create a new branch for your feature or bug fix:  
   ```bash
   git checkout -b feature-name
   ```  
3. Commit your changes with clear and concise messages:  
   ```bash
   git commit -m "Add: Description of your changes"
   ```  
4. Push to your forked repository:  
   ```bash
   git push origin feature-name
   ```  
5. Open a pull request on the main repository.  

### **Code of Conduct**  
Please adhere to our [Code of Conduct](https://github.com/byteom/algovidya/blob/main/CODE_OF_CONDUCT.md) while contributing to maintain a welcoming environment.  

---

## 🛠 Built With  

- **TypeScript**  
- **Next.js**  
- **Tailwind CSS**  
  

---

 

## 🌐 Connect  

- **Website**: Coming soon!  
- **Community**: [Join our WhatsApp group](#)  
- **Repo URL**: [https://github.com/byteom/algovidya](https://github.com/byteom/algovidya)  

---  

Start your DSA mastery with **AlgoVidya** today! 🚀  
