<?php

namespace App\Controllers;

use App\Libraries\MySql;
use App\Libraries\QueryBuilder;
use App\Libraries\Request;
use App\Libraries\View;
use App\Libraries\Fetcher;
use Exception;
use PDO;
use App\Models\ProductModel;

class HomeController
{

    public function index()
    {
        return View::render('site/home.view');
    }

    public function getspotlight()
    {
        if (!Request::ajax()) return;
        $qb = new QueryBuilder('products');
        $qb->select(['id', 'name', 'short', 'thumbnail'])
            ->from()
            ->where('spotlight', '=', true)
            ->whereIsNull('deleted_at', true);
        Fetcher::tryCatchAndEcho($qb->get(), 'items');
    }

    public function getnew()
    {
        if (!Request::ajax()) return;
        $qb = new QueryBuilder('products');
        $qb->select(['id', 'name', 'short', 'thumbnail'])
            ->from()
            ->whereIsNull('deleted_at')
            ->orderBy(['created_at'])
            ->limit(6);
        Fetcher::tryCatchAndEcho($qb->get(), 'items');
    }

    public function getRandom()
    {
        if (!Request::ajax()) return;
        $qb = new QueryBuilder('products');
        $qb->select(['id', 'name', 'short', 'thumbnail'])
            ->from()
            ->whereIsNull('deleted_at')
            ->orderBy(['RAND()'])
            ->limit(6);
        Fetcher::tryCatchAndEcho($qb->get(), 'items');
    }
}
