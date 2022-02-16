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

class LoginController extends Controller
{
    protected $redirectWhenLoggedIn = 'admin';

    public function verifyLogin()
    {
        if (!$_REQUEST['username'] || !$_REQUEST['password']) {
            return json_encode([
                'success'   => false,
                'message' => 'Please enter your username and password'
            ]);
        }

        $username = $_REQUEST["username"];
        $password = $_REQUEST["password"];
        $qb = new QueryBuilder("users");
        $qb->select(["first_name", "username", "password", "user_id"])
            ->from()
            ->where("username", "=", $username);


        $res = MySql::query($qb->get())->fetch(PDO::FETCH_ASSOC);

        if ($res !== false && password_verify($password, $res["password"])) {
            $this->setUserSession($res);
            $_SESSION['alert'] = [
                "class" => "alert-success",
                "text" => "Welcome back, " . $res["first_name"]
            ];
            $_SESSION['loggedin'] = true;
            return json_encode([
                'success'  => true,
                'message'  => "Succesfully logged in.",
            ]);
        }

        return json_encode([
            'success'   => false,
            'message' => 'Incorrect username or password. Please try again'
        ]);
    }

    private function setUserSession($user): void
    {
        $_SESSION['user'] = [
            'uid'        => (int)$user['user_id'],
            'first_name' => $user['first_name'],
        ];
    }

    public function logout()
    {
        session_destroy();
        return json_encode([
            'success'   => true
        ]);
    }
}
