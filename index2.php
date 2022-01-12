<?php
require "database/products_table.php";
require "core/mysql.php";
require "core/core.php";

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'vendor/autoload.php';

// .env configuration
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

function getData()
{
    // $sql = "SELECT * FROM `products` WHERE `deleted_at` IS NULL";
    $sql = "SELECT `products`.*, GROUP_CONCAT(images.url SEPARATOR ',') AS images FROM `products` LEFT JOIN `images` ON `images`.`p_id` = `products`.`id` GROUP BY id";
    $res = query($sql);

    $items = $res->fetchAll(PDO::FETCH_CLASS);
    foreach ($items as $item) {
        $item->images = explode(",", $item->images);
    }
    dd($items);
}

GetData();
