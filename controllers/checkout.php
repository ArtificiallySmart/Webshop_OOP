<?php

function index($view)
{
    if ($_SESSION["loggedin"]) {
        $userId = $_SESSION["id"];
        $sql = "
        SELECT
            `users`.*,
            `billing_addresses`.*
        FROM
            `users`
        LEFT JOIN `billing_addresses` ON `billing_addresses`.`user_id` = `users`.`user_id`
        WHERE `users`.`user_id` = {$userId}";
        $res = query($sql);
        $user = $res->fetchAll(PDO::FETCH_CLASS)[0];
    }
    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
};
