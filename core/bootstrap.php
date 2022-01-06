<?php

$page = getPage();

$action = getAction();

if (!empty($page) && file_exists('controllers/' . $page . '.php')) {
    require_once 'controllers/' . $page . '.php';

    // Call function in controller
    $action($page);
}
