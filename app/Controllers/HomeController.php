<?php

namespace App\Controllers;

use App\Libraries\MySql;
use App\Libraries\QueryBuilder;
use App\Libraries\Request;
use App\Libraries\View;
use Exception;
use PDO;
use App\Models\ProductModel;

class HomeController
{

    public function index()
    {
        return View::render('site/home.view');
    }

    public function products()
    {
        if (!Request::ajax()) return;
        try {
            $product = new ProductModel;
            $products = $product->all();

            $success = true;
            $message = "Success";
        } catch (Exception $e) {
            $products = null;
            $success = false;
            $message = $e->getMessage();
        }

        echo json_encode([
            'success'   => $success,
            'message'   => $message,
            'products'  => $products,
        ]);
    }

    public function getspotlight()
    {
        if (!Request::ajax()) return;
        $qb = new QueryBuilder;
        $qb->select(['id', 'name', 'short', 'thumbnail'])
            ->from('products')
            ->where('spotlight', '=', true)
            ->whereIsNull('deleted_at', true);
        try {
            $items = MySql::query($qb->get())->fetchAll(PDO::FETCH_CLASS);
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

    public function getnew()
    {
        if (!Request::ajax()) return;
        $qb = new QueryBuilder;
        $qb->select(['id', 'name', 'short', 'thumbnail'])
            ->from('products')
            ->where('deleted_at', 'IS', 'NULL')
            ->orderBy(['created_at'])
            ->limit(6);
        // dd($qb);
        try {
            $items = MySql::query($qb->get())->fetchAll(PDO::FETCH_CLASS);
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
        // $sql = "SELECT `id`, `name`, `short`, `thumbnail` FROM `products` WHERE deleted_at IS NULL ORDER BY created_at DESC LIMIT 6";
        // pullItems($sql);
    }

    public function getRandom()
    {
        if (!Request::ajax()) return;
        $qb = new QueryBuilder;
        $qb->select(['id', 'name', 'short', 'thumbnail'])
            ->from('products')
            ->where('deleted_at', 'IS', 'NULL')
            ->orderBy(['RAND()'])
            ->limit(6);
        // dd($qb);
        try {
            $items = MySql::query($qb->get())->fetchAll(PDO::FETCH_CLASS);
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
