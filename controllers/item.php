<?php

function index($view)
{
    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}

function getItem($view, $id)
{
    $sql = "SELECT 
                `products`.*, GROUP_CONCAT(images.url SEPARATOR ',') 
            AS 
                images 
            FROM 
                `products` 
            LEFT JOIN 
                `images` 
            ON 
                `images`.`p_id` = `products`.`id` 
            WHERE 
                `products`.id = $id 
            GROUP BY 
                id";

    $res = query($sql);

    $items = $res->fetchAll(PDO::FETCH_CLASS);
    foreach ($items as $item) {
        $item->images = explode(",", $item->images);
    }

    echo json_encode([
        'success'   => true,
        'item'    => $items,
    ]);
}
