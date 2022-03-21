<?php

namespace App\Controllers;

use App\Helpers\Helper;
use App\Libraries\MySql;
use App\Libraries\QueryBuilder;
use App\Libraries\Request;
use App\Libraries\View;
use App\Libraries\Fetcher;
use Exception;
use PDO;
use App\Models\ProductModel;


class ShoppingCartController extends Controller
{
    public function index()
    {
    }

    public function addToCart()
    {
        //Fix this
    }

    public function getCart()
    {
        $cartList = key($_POST);
        $cartList = explode(',', $cartList);
        dd($cartList);
    }
}
