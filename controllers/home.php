<?php

function index($view)
{
    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}

function getData()
{

    $sql = "SELECT `products`.*, GROUP_CONCAT(images.url SEPARATOR ',') AS images FROM `products` LEFT JOIN `images` ON `images`.`p_id` = `products`.`id` GROUP BY id";
    $res = query($sql);

    $items = $res->fetchAll(PDO::FETCH_CLASS);
    foreach ($items as $item) {
        $item->images = explode(",", $item->images);
    }

    echo json_encode([
        'success'   => true,
        'items'    => $items,
    ]);
}

$fields = ['id', 'name', 'short', 'thumbnail'];

function getspotlight()
{
    $sql = "SELECT `id`, `name`, `short`, `thumbnail` FROM `products` WHERE `spotlight`=true";
    pullItems($sql);
}

function getnew()
{
    $sql = "SELECT `id`, `name`, `short`, `thumbnail` FROM `products` WHERE deleted_at IS NULL ORDER BY created_at DESC LIMIT 6";
    pullItems($sql);
}

function getrandom()
{
    $sql = "SELECT `id`, `name`, `short`, `thumbnail` FROM `products` WHERE deleted_at IS NULL ORDER BY RAND() LIMIT 6";
    pullItems($sql);
}

function pullItems($sql)
{
    $res = query($sql);

    $items = $res->fetchAll(PDO::FETCH_CLASS);

    echo json_encode([
        'success'   => true,
        'items'    => $items,
    ]);
}
