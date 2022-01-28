<?php

function verifyLogin()
{
    $userinfo = json_decode(file_get_contents("php://input"), true);
    $sql = "SELECT first_name, username, password, user_id FROM users where username = '" . $userinfo['username'] . "'";
    $res = query($sql);
    $users = $res->fetchAll(PDO::FETCH_CLASS);


    if (isset($users[0]) && password_verify($userinfo['password'], $users[0]->password)) {
        $_SESSION['alert'] = array("class" => "alert-success", "text" => "Welcome back, " . $users[0]->first_name);
        $_SESSION["loggedin"] = true;
        $_SESSION["id"] = $users[0]->user_id;
        $_SESSION["username"] = $users[0]->username;
        echo json_encode([
            'success'   => true,
        ]);
    } else {
        echo json_encode([
            'success'   => false,
        ]);
    }
}

function logOut()
{
    $_SESSION["loggedin"] = false;
    unset($_SESSION["id"]);
    unset($_SESSION["username"]);
    echo json_encode([
        'success'   => true,
    ]);
}
