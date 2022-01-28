<?php

function index($view)
{
    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}

function handleForm($view)
{

    if ($_SERVER['REQUEST_METHOD'] != 'POST') {
        dd('no get, only post');
    };
    $search = $_POST["search"];
    header("Location: ?page=search&search=$search");
}

function search($view, $query)
{
    $sql =
        "SELECT
    products.id,
    products.name,
    products.short,
    products.thumbnail,
    products.price
    FROM products
    WHERE MATCH (name, description, short)
    AGAINST ('$query' IN NATURAL LANGUAGE MODE);
    ";
    $res = query($sql);
    $search_results = $res->fetchAll(PDO::FETCH_CLASS);

    echo json_encode([
        'success'   => true,
        'searchResults'    => $search_results,
    ]);
}
