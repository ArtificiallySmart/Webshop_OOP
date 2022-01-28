<?php
session_start();
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
};
if (!isset($_SESSION['alert'])) {
    $_SESSION['alert'] = [];
}
if (!isset($_SESSION["loggedin"])) {
    $_SESSION["loggedin"] = false;
}
if (!isset($_COOKIE["loggedIn"]) || !$_SESSION["loggedin"]) {
    setcookie("loggedIn", "false");
}

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'vendor/autoload.php';

// .env configuration
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

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
