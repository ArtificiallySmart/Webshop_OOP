<?php

function index($view)
{
    if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    }
    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
};
