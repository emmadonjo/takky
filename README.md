# Tasky

You simple task mgt app.

## Features

-   Task CRUD
-   Task re-ordering by priority
-   Drag and drop to re-order tasks
-   Filter tasks by project

## Setup

### Requirements

-   At least PHP 8.2
-   [Laravel 11 and its requirements ](https://laravel.com/docs/11.x/deployment#server-requirements)
-   NodeJs >=20

### Set up from Github

-   Clone project to your machine - `git clone git@github.com:emmadonjo/tasky.git`
-   Install laravel dependencies with `composer install`
-   Install frontend pakcages - `npm install`
-   Copy `.env.example` to `.env` - `cp .env.example .env` and update the values as applicable. Notably, the **database** values
-   Run `php artisan migrate --seed` to migrate the database and run the seeder
-   Compile frontend assets with `npm run build`
-   Start the backend server - `php artisan serve`. This will run the application on port `8000` of your localhost - `http:localhost:8000`
-   Click the link to view the app.

### Setup from Downloaded File

-   Unzip the project to your preferred directory
-   Install laravel dependencies with `composer install`
-   Install frontend pakcages - `npm install`
-   Copy `.env.example` to `.env` - `cp .env.example .env` and update the values as applicable. Notably, the **database** values
-   Run `php artisan migrate --seed` to migrate the database and run the seeder
-   Compile frontend assets with `npm run build`
-   Start the backend server - `php artisan serve`. This will run the application on port `8000` of your localhost - `http:localhost:8000`
-   Click the link to view the app.

### Login

If you haven't changed the login details in the `DatabaseSeeder` file, login with

-   Email: **johndoe@example.com**
-   Password: **password**
