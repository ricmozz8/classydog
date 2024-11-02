<br>
<p align="center">
<img src="./resources/assets/logotype/svg/classydog-geo-horizontal-white.svg" alt="Classydog Logo"
style="width: 45%; margin: 0 auto; display: block;">
</p>
<br>

# Classydog
An app for selling second hand items. With direct connection between sellers and buyers (Direct Messaging, Order Tracking).

## Requirements
In order to run the project, you must have **Composer, NodeJS and PHP (8.2 minimum)** installed. You may do so by
running this on the terminal.

### For Windows
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows'))
```
### For MacOS
```
/bin/bash -c "$(curl -fsSL https://php.new/install/mac)"
```
### For Linux
```bash
/bin/bash -c "$(curl -fsSL https://php.new/install/linux)"
```
This will install the laravel installer for creating projects, php and composer.

#### Installing Node
You can install nodejs by accessing [their website](https://nodejs.org/en/).

## Set Up
Once you've installed all your requirements, copy and paste the contents on the `.env.example` file and paste it on a new file called `.env`.
Once created, you may now proceed to run the following command:
```bash
composer install
```
This will install all dependencies of the project and setup the local development environment (this will create a `/vendor` folder with all dependencies). 
If you've installed node, this will run automatically the command `npm install`. _Run it manually if not_.

## Running the project
To run the project you need to create two terminals, since we're using ReactJS for the frontend and Laravel for the backend we need to set up their servers in order to
access functionalities such as live-reloading and SPA behaviour.

Start the project running the command
```bash
php artisan serve
```
And on the other terminal
```bash
npm run dev
```
By default, this will start a server on `localhost:8000` Access only the server on the laravel side, the npm server is for live-reloading only.
___

### About Laravel
Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
