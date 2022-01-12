<?php

/**
 * (var_)dump variable(s)
 * No params, just get vars from func_get_args function
 */
function dd()
{
    $args = func_get_args();

    if (count($args)) {
        echo "<pre>";

        foreach ($args as $arg) {
            var_dump($arg);
        }

        echo "</pre>";

        die();
    }
}

function isAjax()
{
    return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
}

function exception_handler()
{
}


function getPage()
{
    return array_key_exists('page', $_GET) ? $_GET['page'] : 'home';
}

function getAction()
{
    return array_key_exists('action', $_GET) ? $_GET['action'] : 'index';
}

function getParams()
{
    return array_key_exists('params', $_GET) ? $_GET['params'] : '';
}
