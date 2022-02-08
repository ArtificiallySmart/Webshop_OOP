<?php

namespace App\Controllers;

use App\Libraries\Fetcher;
use App\Libraries\MySql;
use App\Libraries\QueryBuilder;
use App\Libraries\Request;
use App\Libraries\View;
use Exception;
use PDO;
use App\Models\ProductModel;


class SearchController
{

    public function index()
    {
        if (!Request::ajax()) return View::render('site/search.view');
        $query = $_GET["search"];
        $qb = new QueryBuilder('products');
        $qb->select(['id', 'name', 'short', 'thumbnail', 'price'])
            ->from()
            ->whereMatch(['name', 'description', 'short'], $query);

        Fetcher::tryCatchAndEcho($qb->get(), 'searchResults');
    }
}
