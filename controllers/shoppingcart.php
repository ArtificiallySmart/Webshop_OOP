<?php

function addtocart()
{
    $item = json_decode(file_get_contents("php://input"), true);
    if (!array_key_exists($item['id'], $_SESSION['cart'])) {
        $_SESSION['cart'][$item['id']] = $item['amt'];
    } else {
        $_SESSION['cart'][$item['id']] += $item['amt'];
    }
    if ($_SESSION['cart'][$item['id']] <= 0) {
        unset($_SESSION['cart'][$item['id']]);
    }
}

function fetchCart()
{

    $sql =
        "SELECT
    products.id,
    products.name,
    products.price,
    products.product_id,
    products.thumbnail,
    products.stock
    FROM products
    WHERE product_id IN ('" . implode("','", array_keys($_SESSION['cart'])) . "')";
    $res = query($sql);
    $cart_items = $res->fetchAll(PDO::FETCH_CLASS);

    foreach ($cart_items as $item) {
        // var_dump($item, $_SESSION['cart'][$item->product_id]);
        // dd($item, $_SESSION['cart'][$item['product_id']]);
        $item->amount = $_SESSION['cart'][$item->product_id];
    }
    echo json_encode([
        'success'   => true,
        'cartItems'    => $cart_items,
    ]);
}

function removeFromCart()
{
    $item = json_decode(file_get_contents("php://input"), true);
    unset($_SESSION['cart'][$item['id']]);
}
