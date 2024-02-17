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

## Development
# Backend: 
  Navigate to the `backend` directory and run 
- `docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php83-composer:latest \
    composer install --ignore-platform-reqs`

  this is to install composer temporarily and install dependencies, once it's done, run `docker-compose up` then after it's running in docker, you can go to the docker exec if you use docker desktop and run `php artisan db:migrate`and `php artisan db:seed` or run from the terminal:

- docker exec -it <container_name_or_id> php artisan db:migrate
- docker exec -it <container_name_or_id> php artisan db:seed

# Frontend: Navigate to the `client` directory. Use `npm install` to install dependencies and `npm run dev` to start the development server.


## Usage
- Visit `http://localhost:3000` to access the application.
- Visit `http://localhost/graphiql` to access the graphql api playground.
- Home page lists all available memo tests.
- Click on a test to start or continue a game session.

## Contributing
Contributions are welcome! Please create a pull request with your proposed changes.

## License
Specify the license under which your project is released.

## Acknowledgements
- Mention any resources, libraries, or other acknowledgements here.

