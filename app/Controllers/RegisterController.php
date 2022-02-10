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
        $data = [
            'username' => $_REQUEST['username'],
            'email' => $_REQUEST['email'],
            'first_name' => $_REQUEST['first_name'],
            'last_name' => $_REQUEST['last_name'],
            'password' => password_hash($_REQUEST['password'], PASSWORD_DEFAULT),
            'mailing_list' => $_REQUEST['mailing_list']
        ];

        $user = new UserModel;
        $user->store($data);

        $_SESSION['alert'] = array("class" => "alert-success", "text" => "Thanks for registering, please login to continue.");
        echo json_encode([
            'success' => true
        ]);
    }

    public function validate()
    {
        if (UserModel::exists($_POST['type'], $_POST['value']) === true) {
            echo json_encode([
                'success'   => true,
                'message'    => 'already exists!!!',
            ]);
        }
    }
}
