<?php

require 'vendor/autoload.php';

// Starting a server PHP session
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

if (file_exists($_SERVER['DOCUMENT_ROOT'] . '/.migration')) {
    session_destroy();
    unlink($_SERVER['DOCUMENT_ROOT'] . '/.migration');
}

// Using the Dotenv package for using the .env and the global $_ENV
$dotenv = \Dotenv\Dotenv::createImmutable($_SERVER['DOCUMENT_ROOT']);
$dotenv->load();

// Showing 'flash' messages if one is set in the session
$msg = new \Plasticbrain\FlashMessages\FlashMessages();
$msg->display();
