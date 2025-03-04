Express.js In-Memory Task API

This is a simple RESTful API built with Express.js that provides CRUD operations for managing tasks in memory. Since it uses in-memory storage, all data is lost when the server restarts.

Features

* Create, Read, Update, and Delete (CRUD) operations for tasks.

* In-memory storage (Data resets on server restart).

* JSON-based API with proper error handling.

Setup Instructions

Prerequisites

Ensure you have the following installed:

* Node.js 
* Npm

Installation Steps
1. Clone the repository:
2. Install dependencies:
npm install
3. Start the server:
node app.js
4. The server will run on http://localhost:3000/
API Endpoints
1. Get All Tasks
* Endpoint: GET /tasks
* Description: Fetches all tasks.
2. Get a Task by ID
* Endpoint: GET /tasks/:id
* Description: Fetches a specific task by ID.
* Example Request: GET /tasks/1
3. Create a New Task
* Endpoint: POST /tasks
* Description: Adds a new task.
4. Update a Task
* Endpoint: PUT /tasks/:id
* Description: Updates an existing task.
* Example Request: PUT /tasks/1
5. Delete a Task
* Endpoint: DELETE /tasks/:id
* Description: Deletes a task by ID.
* Example Request: DELETE /tasks/1
Testing the API
You can test the API using:
* Postman (Recommended)


