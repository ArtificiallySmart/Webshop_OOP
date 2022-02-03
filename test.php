<?php

$condition = 'spotlight';
$value = true;

$selector = [$condition => $value];

$sql = "'" . array_keys($selector)[0] . "' = " . array_values($selector)[0] . " AND ";

var_dump($sql);
die();
