<?php

namespace App\Controllers;

use App\Libraries\MySql;
use App\Libraries\QueryBuilder;
use App\Libraries\Request;
use App\Libraries\View;
use Exception;
use PDO;
use App\Models\ProductModel;

class HomeController extends Controller
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
        $this->tryFetch($qb);
    }

    public function getnew()
    {
        if (!Request::ajax()) return;
        $qb = new QueryBuilder('products');
        $qb->select(['id', 'name', 'short', 'thumbnail'])
            ->from()
            ->where('deleted_at', 'IS', 'NULL')
            ->orderBy(['created_at'])
            ->limit(6);
        $this->tryFetch($qb);
    }

    public function getRandom()
    {
        if (!Request::ajax()) return;
        $qb = new QueryBuilder('products');
        $qb->select(['id', 'name', 'short', 'thumbnail'])
            ->from()
            ->where('deleted_at', 'IS', 'NULL')
            ->orderBy(['RAND()'])
            ->limit(6);
        $this->tryFetch($qb);
    }

    public function tryFetch(object $query)
    {
        try {
            $items = MySql::query($query->get())->fetchAll(PDO::FETCH_CLASS);
            $success = true;
            $message = "Success";
        } catch (Exception $e) {
            $items = null;
            $success = false;
            $message = $e->getMessage();
        }
        echo json_encode([
            'success'   => $success,
            'message'   => $message,
            'items'  => $items,
        ]);
    }
}
