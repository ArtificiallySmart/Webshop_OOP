<?php

namespace App\Controllers;

use App\Libraries\MySql;
use App\Libraries\QueryBuilder;
use App\Libraries\Request;
use App\Libraries\View;
use Exception;
use PDO;
use App\Models\ProductModel;
use App\Models\UserModel;

class RegisterController extends Controller
{
    public function index()
    {
        return View::render('site/register.view');
    }

    public function store()
    {
    }
    public function validate()
    {
        dd($_POST);
        // if (UserModel::exists($post['type'], $post['value']) === true) {
        //     dd('exists!');
        // } else {
        //     dd('not exists!');
        // }
    }
}
