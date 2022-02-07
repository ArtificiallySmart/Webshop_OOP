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

class ItemController
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

        try {
            $item = MySql::query($qb->get())->fetchAll(PDO::FETCH_CLASS)[0];
            $item->images = explode(",", $item->images);
            $success = true;
            $message = "Success";
        } catch (Exception $e) {
            $item = null;
            $success = false;
            $message = $e->getMessage();
        }
        echo json_encode([
            'success'   => $success,
            'message'   => $message,
            'item'  => $item,
        ]);
    }
}

// $sql = "
// SELECT
//     `products`.*,
//     GROUP_CONCAT(images.url SEPARATOR ',') AS images
// FROM
//     `products`
// LEFT JOIN `images` ON `images`.`p_id` = `products`.`id`
// WHERE
//     `products`.id = 1