<?php

function index($view)
{
    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}

function handleForm($view)
{

    if ($_SERVER['REQUEST_METHOD'] != 'POST') {
        dd('no get, only post');
    };
    $search = $_POST["search"];
    header("Location: ?page=search&search=$search");
    die();
}
