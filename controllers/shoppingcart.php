<?php

function addToCart($item, $amount)
{
    $_SESSION['cart'][] = $item;
}

function removeFromCart()
{
}
