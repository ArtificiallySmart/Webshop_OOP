<?php

namespace App\Controllers;

use App\Libraries\View;
use App\Libraries\Request;


abstract class Controller
{
    abstract public function extraIndexData();

    public function index()
    {
        $this->extraIndexData();
        $page = Request::uri();
        return View::render("site/{$page}.view");
    }
}
