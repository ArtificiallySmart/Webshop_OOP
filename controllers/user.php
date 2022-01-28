<?php

function index($view)
{
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
    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}

function addAddress()
{
    $userAddress = $_POST;
    $userAddress["user_id"] = $_SESSION["id"];
    insert($userAddress, "billing_addresses");
    header("Location: ?page=user");
}
