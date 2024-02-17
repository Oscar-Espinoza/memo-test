# Memo Tests Challenge

## Overview
This project is a web application for playing memo tests, designed with a kid-friendly interface. It uses Next.js and TypeScript for the frontend, GraphQL API with Lighthouse PHP for the backend, and Docker for containerization.

## Prerequisites
- Docker
- Node.js
- Git

## Setup and Installation
1. Clone the repository:
  - git clone https://github.com/Oscar-Espinoza/memo-test.git

2. Navigate to the project directory:
  cd memo-test

## Backend:
  REMEMBER TO ADD THE .env file
  Navigate to the `backend` directory with 'cd server' and run:
- docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs

    If you encounter the message "/var/www/html/vendor/doctrine does not exist and could not be created" you can run the command with sudo at the start or as a super user.

  this is to install composer temporarily and install dependencies, once it's done, run `docker-compose up`, now, in order to migrate and seed the database, run:

- ./vendor/bin/sail php artisan db:migrate
- ./vendor/bin/sail php artisan db:seed

## Frontend:
  Navigate to the `client` directory with 'cd client'. Use `npm install` to install dependencies and `npm run dev` to start the development server.

## Usage
- Visit `http://localhost:3000` to access the application.
- Visit `http://localhost/graphiql` to access the graphql api playground.
- Home page lists all available memo tests.
- Click on a test to start or continue a game session.

## Errors
In case you encounter some of these errors during the local deploy.

### "The stream or file "/var/www/html/storage/logs/laravel.log" could not be opened: failed to open stream: Permission denied"

Close the running service with docker-compose down, then run:
- sudo chmod -R 777 storage
- sudo chmod -R a+rw storage
- php artisan cache:clear
- php artisan config:clear
- php artisan config:cache

And now run it again with docker-compose up.

### "There is no existing directory at /storage/logs and its not buildable: Permission denied"
Just run:
- php artisan cache:clear
- php artisan config:clear
- php artisan config:cache
