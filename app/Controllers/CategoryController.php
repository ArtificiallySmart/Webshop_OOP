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


class CategoryController extends Controller
{

    public function getCategories()
    {
        if (!Request::ajax()) return;
        $qb = new QueryBuilder('categories');
        $qb->select(['name'])
            ->as('category')
            ->groupConcat('name', 'subcategories')
            ->as('subcategory')
            ->from()
            ->join('subcategories', 'cat_id')
            ->groupBy(['categories.id']);


        $reply = new Fetcher;
        $reply->tryFetch($qb->get());
        $reply->explode('subcategory');
        $reply->echo('categories');
    }
    public function getByCategory()
    {
        dd('here!');
        return View::render('site/category.view');
    }
}
