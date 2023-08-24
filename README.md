Clean Blog Web Application

The Clean Blog Web Application is a simple blogging platform built using Node.js, Express, and MongoDB. It allows users to create, read, update, and delete blog posts. This README provides an overview of the project structure, dependencies, and how to run the application.
Table of Contents

Project Structure
Dependencies
Getting Started
    Installation
    Database Configuration
    Running the Application
Usage
Contributing
License

#Project Structure

The project is structured as follows:

    models/Posts.js: Defines the data model for blog posts using Mongoose schema.
    controllers/pageControllers.js: Contains route handlers for rendering different pages.
    controllers/postControllers.js: Contains route handlers for CRUD operations on blog posts.
    public/: Static assets like stylesheets and client-side scripts.
    views/: EJS templates for rendering different pages.
    app.js: Main application file that sets up the Express server and routes.

Dependencies

The application uses the following main dependencies:

    express: Web framework for Node.js.
    mongoose: MongoDB object modeling tool.
    method-override: Middleware for handling HTTP method overrides.
    ejs: Templating engine for rendering dynamic content.

Getting Started
Installation

    Clone this repository to your local machine:

    bash

git clone https://github.com/ekeskn/cleanBlog.git

Navigate to the project directory:

bash

cd clean-blog

Install the required dependencies:

bash

    npm install

Database Configuration

The application uses a MongoDB database for storing blog posts. Make sure you have MongoDB installed and running locally or provide a remote database URL.

In the app.js file, you can configure the MongoDB connection by modifying the mongoose.connect line:

javascript

mongoose.connect('mongodb://localhost/cleanblog-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

Replace 'mongodb://localhost/cleanblog-test-db' with your own MongoDB connection URL.
Running the Application

To start the application, run the following command:

bash

npm start

The server will start, and you'll see a message in the console:

yaml

Sunucu 3000 da başlatıldı..

The application will be accessible at http://localhost:3000.
Usage

    Visit the homepage at / to view all blog posts.
    Click on a blog post to view its details at /post/:id.
    Add a new post by visiting /add_post.
    Edit an existing post by visiting /post/edit/:id.
    Delete a post by sending a DELETE request to /post/:id.

Contributing

Contributions are welcome! If you find a bug or want to add a new feature, feel free to fork the repository and submit a pull request.
License

This project is licensed under the MIT License.
