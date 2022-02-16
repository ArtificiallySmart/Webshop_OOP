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


class UserController
{

    public function index()
    {
        return View::render('site/user.view');
    }
}
