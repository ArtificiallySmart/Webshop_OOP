<?php

namespace App\Controllers;

use App\Libraries\Fetcher;
use App\Libraries\MySql;
use App\Libraries\QueryBuilder;
use App\Libraries\Request;
use App\Libraries\View;
use App\Helpers\Helper;
use Exception;
use PDO;
use App\Models\ProductModel;
use App\Models\UserModel;


class UserController
{

    public function index()
    {

        if (!isset($_SESSION, $_SESSION['user'])) return header('Location: home');

        $userId = Helper::getUserIdFromSession();
        $user = UserModel::load()->get($userId);
        $userAddress = UserModel::load()->getUserAddress();

        return View::render('site/user.view', [
            'user'  => $user,
            'address' => $userAddress
        ]);
    }

    // function addAddress()
    // {
    //     $userAddress = $_POST;
    //     $userAddress["user_id"] = $_SESSION["id"];
    //     insert($userAddress, "billing_addresses");
    //     header("Location: ?page=user");
    // }

}
