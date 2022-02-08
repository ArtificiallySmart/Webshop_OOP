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

class ItemController extends Controller
{
    public function index()
    {
        return View::render('site/items.view');
    }

    public function get()
    {
        if (!Request::ajax()) return;
        $itemId = Helper::getIdFromUrl('items');
        $qb = new QueryBuilder('products');
        $qb->select()
            ->groupConcat('url', 'images')
            ->as('images')
            ->from()
            ->join('images', 'p_id')
            ->where('id', '=', $itemId);

        $reply = new Fetcher;
        $reply->tryFetch($qb->get(), false);
        $reply->explode('images');
        $reply->echo('item');
    }
}
