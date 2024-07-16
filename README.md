# Takky

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

### Setup from Github

-   Clone project to your machine - `git clone git@github.com:emmadonjo/takky.git`
-   Install laravel dependencies with `composer install`
-   Install frontend pakcages - `npm install`
-   Copy `.env.example` to `.env` - `cp .env.example .env` and update the values as applicable. Notably, the **database** values
-   Generate app key `php artisan key:generate`
-   Run `php artisan migrate --seed` to migrate the database and run the seeder
-   Compile frontend assets with `npm run build`
-   Link storage `php artisan storage:link`
-   Start the backend server - `php artisan serve`. This will run the application on port `8000` of your localhost - `http:localhost:8000`
-   Click the link to view the app.

### Setup from Downloaded File

-   Unzip the project to your preferred directory
-   Install laravel dependencies with `composer install` (optional step)
-   Install frontend pakcages - `npm install` (optional step)
-   Copy `.env.example` to `.env` - `cp .env.example .env` and update the values as applicable. Notably, the **database** values
-   Generate app key `php artisan key:generate`
-   Run `php artisan migrate --seed` to migrate the database and run the seeder
-   Compile frontend assets with `npm run build` (optional step)
-   Link storage `php artisan storage:link`
-   Start the backend server - `php artisan serve`. This will run the application on port `8000` of your localhost - `http:localhost:8000`
-   Click the link to view the app.

If faced with access/permission related errors, run the following terminal commands:

```bash
    sudo chgrp -R www-data storage bootstrap/cache
    sudo chmod -R ug+rwx storage bootstrap/cache
```

### Login

If you haven't changed the login details in the `DatabaseSeeder` file, login with

-   Email: **johndoe@example.com**
-   Password: **password**
