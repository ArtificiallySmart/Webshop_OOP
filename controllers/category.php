<?php

function getByCategory($view, $category)
{
    $sql =
        "SELECT
        products.id,
	    products.name,
        products.short,
        products.thumbnail,
        products.price,
        categories.name AS category,
        subcategories.name AS subcategory
    FROM
        products
    JOIN categories ON products.category = categories.id
    JOIN subcategories ON products.subcategory = subcategories.id
    WHERE categories.name = '$category' OR subcategories.name = '$category'";
    $res = query($sql);
    $cat_results = $res->fetchAll(PDO::FETCH_CLASS);

    echo json_encode([
        'success'   => true,
        'catResults'    => $cat_results,
    ]);
};
