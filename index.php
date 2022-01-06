<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'vendor/autoload.php';

// .env configuration
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// starting a server php session
session_start();

// include core modules

require 'core/mysql.php';
require 'core/core.php';

set_exception_handler('exception_handler');

if (!isAjax()) {
    // Load the HTML <head> section
    require 'assets/views/partials/head.view.php';

    $content = [];


    // Inject code from controller
    require 'core/bootstrap.php';

    // Close HTML <body> and <html> section
    require 'assets/views/partials/foot.view.php';
} else {
    require 'core/bootstrap.php';
}
