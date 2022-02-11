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


class CheckoutController extends Controller
{
    public function index()
    {
        return View::render('site/checkout.view');
    }
}
