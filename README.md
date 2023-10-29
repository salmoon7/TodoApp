# Todo App with React Native Expo
This is a simple Todo App built with React Native and Expo. It includes a backend service that must be invoked via the API file. This README will guide you through setting up, running, and customizing the app.
Functionality
# User Interface (UI)
The Todo App features a user-friendly and intuitive user interface designed with React Native and Expo. Key UI elements include:

Task List: Displays a list of all your tasks, including their titles and status (completed or not).

Add Task: Easily add new tasks with a title and a simple tap.

Edit Task: Update existing tasks by tapping on them. You can modify the title and change the completion status.

Delete Task: Remove tasks from the list by swiping right on a task and confirming the deletion.

Mark as Complete/Incomplete: Tap on a task to mark it as completed or incomplete.

Filter Tasks: Quickly filter tasks by their completion status (All, Completed, or Incomplete).

# CRUD Operations
The app supports all basic CRUD (Create, Read, Update, Delete) operations for managing your tasks:

Create (C): You can create a new task by tapping the "Add Task" button. Provide a title for the task, and it will be added to the list.

Read (R): The app displays all your tasks in a scrollable list. You can see the title and the completion status of each task.

Update (U): To update a task, simply tap on it in the list. You can change the task's title and mark it as completed or incomplete.

Delete (D): You can delete a task by swiping right on it and confirming the deletion. The task will be removed from the list.
# Screenshot
![Edit task](https://github.com/salmoon7/TodoApp/blob/main/IMG_6209.PNG)
Edit and mark task as complete or imcomplete
![Delete All]()
# Table of content 
Prerequisites
Getting Started
Project Structure
Running the App
Customization
API Service        
Contributing
License

# Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js installed.
Expo CLI installed.
A code editor of your choice (e.g., Visual Studio Code).

# Getting Started
git clone https://github.com/salmonn7/todo-app.git
# Navigate to the project directory:
cd todo-app
# Install project dependencies:
npm install

#  Running the App
To run the app locally, use Expo:
expo start
This will start the development server, and you can choose to run the app on an emulator, physical device, or web browser.
Any how you run it this what you will see :
![App screen](https://github.com/salmoon7/TodoApp/blob/main/IMG_6113.PNG)
# API Service
The app relies on a backend service for data. The API service is configured in backend/app.js. You need to provide the appropriate API endpoints and authentication credentials in this file.

# Contributing
If you'd like to contribute to this project, please follow these steps:

# Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes.
Test your changes thoroughly.
Commit your changes with descriptive messages.
Push your branch to your fork.
Create a pull request to the main repository.
# License
This project is licensed under the MIT License. Feel free to use and modify it for your own purposes.



