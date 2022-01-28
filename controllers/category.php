<?php

function index($view)
{
    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
};

function getCategories()
{
    $sql = "SELECT categories.name AS category, GROUP_CONCAT(subcategories.name SEPARATOR ',') AS subcategory from categories join subcategories on categories.id = subcategories.cat_id GROUP BY categories.id";

    $res = query($sql);

    $categories = $res->fetchAll(PDO::FETCH_CLASS);
    foreach ($categories as $category) {
        $category->subcategory = explode(",", $category->subcategory);
    }

    echo json_encode([
        'success'   => true,
        'categories'    => $categories,
    ]);
}

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
