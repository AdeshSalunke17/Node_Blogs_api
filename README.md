# Node.js MVC Project

This is a **Node.js project** built with **Express.js** and **Mongoose**, following the **MVC (Model-View-Controller)** architecture. It provides a structured and scalable approach to building RESTful APIs.

## Overview

- **Architecture**: MVC for separation of concerns.
- **Framework**: Express.js for routing and request handling.
- **Database**: MongoDB using Mongoose for schema modeling and database interaction.
- **Features**:
  - CRUD operations for resources (e.g., Blogs).
  - Input validation and error handling.
  - Organized folder structure for scalability and maintainability.

### Example API Endpoints

| Method   | Endpoint          | Description                |
|--------  |-------------------|----------------------------|
| GET      | `/blogs/:id`      | Fetch particular blog      |
| POST     | `/blogs`          | Create a new blog          |
| POST     | `/blogs/many`     | Create multiple new blogs  |
| PATCH    | `/blogs/:id`      | Update an existing blog    |
| DELETE   | `/blogs/:id`      | Delete a blog by ID        |

