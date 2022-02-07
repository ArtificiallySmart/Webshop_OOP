<?php

namespace App\Controllers;

use App\Libraries\MySql;
use App\Libraries\QueryBuilder;
use App\Libraries\Request;
use App\Libraries\View;
use Exception;
use PDO;
use App\Models\ProductModel;


class SearchController extends Controller
{
    public function extraIndexData()
    {
        $query = $_GET["search"];
        $qb = new QueryBuilder('products');
        $qb->select(['id', 'name', 'short', 'thumbnail', 'price'])
    }
}
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