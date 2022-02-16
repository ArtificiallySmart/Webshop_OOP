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
        $item = $_REQUEST["item"];
        $amount = $_REQUEST["amount"];
    }
}
