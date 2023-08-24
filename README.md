# Clean Blog Web Application

The Clean Blog Web Application is a simple blogging platform built using Node.js, Express, and MongoDB. It allows users to create, read, update, and delete blog posts. This README provides an overview of the project structure, dependencies, and how to run the application.

## Project Structure

The project is structured as follows:

- `models/Posts.js`: Defines the data model for blog posts using Mongoose schema.
- `controllers/pageControllers.js`: Contains route handlers for rendering different pages.
- `controllers/postControllers.js`: Contains route handlers for CRUD operations on blog posts.
- `public/`: Static assets like stylesheets and client-side scripts.
- `views/`: EJS templates for rendering different pages.
- `app.js`: Main application file that sets up the Express server and routes.

## Dependencies

The application uses the following main dependencies:

- `express`: Web framework for Node.js.
- `mongoose`: MongoDB object modeling tool.
- `method-override`: Middleware for handling HTTP method overrides.
- `ejs`: Templating engine for rendering dynamic content.

## Getting Started

### Installation

1. Clone this repository to your local machine:

