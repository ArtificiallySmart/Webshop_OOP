<?php

namespace App\Controllers;

use App\Helpers\Helper;
use App\Libraries\MySql;
use App\Libraries\QueryBuilder;
use App\Libraries\Request;
use App\Libraries\View;
use Exception;
use PDO;
use App\Models\ProductModel;


class CategoryController
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

        try {
            $categories = MySql::query($qb->get())->fetchAll(PDO::FETCH_CLASS);
            foreach ($categories as $category) {
                $category->subcategory = explode(",", $category->subcategory);
            }
            $success = true;
            $message = "Success";
        } catch (Exception $e) {
            $categories = null;
            $success = false;
            $message = $e->getMessage();
        }
        echo json_encode([
            'success'   => $success,
            'message'   => $message,
            'categories'  => $categories,
        ]);
    }
    public function getByCategory()
    {
        dd('here!');
        return View::render('site/category.view');
    }
}
