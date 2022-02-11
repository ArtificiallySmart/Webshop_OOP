<?php
require 'core/core.php';

dd(getCatFromUrl('/categories/Table%20lamps'));

function getCatFromUrl()
{

    $request  = trim($_SERVER['REQUEST_URI']);
    //split the path by '/'
    $params = explode("/", $request);

    $cleans = cleansParams($params);
    return urldecode($cleans[1]);
}

function cleansParams($params)
{
    $cleans = array();
    if (count($params) > 0) {
        foreach ($params as $key => $value) {
            if (!empty($value)) {
                array_push($cleans, trim(strtolower($value)));
            }
        }
    }

    return $cleans;
}
