<?php

function index($view)
{

    // Define variables and initialize with empty values


    // Processing form data when form is submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $username = trim($_POST["username"]);
        $password = trim($_POST["password"]);

        // Prepare a select statement
        $sql = "SELECT user_id, username, password FROM users WHERE username = '" . $username . "'";
        $stmt = query($sql);

        if ($stmt->rowCount() == 1) {
            if ($row = $stmt->fetch()) {
                $id = $row["user_id"];
                $username = $row["username"];
                $hashed_password = $row["password"];
                if (password_verify($password, $hashed_password)) {
                    // Password is correct, so start a new session
                    session_start();

                    // Store data in session variables
                    $_SESSION["loggedin"] = true;
                    $_SESSION["id"] = $id;
                    $_SESSION["username"] = $username;

                    // Redirect user to welcome page
                    $_SESSION['alert'] = array("class" => "alert-success", "text" => "Thanks for logging in");
                    header("Location: /");
                } else {
                    // Password is not valid, display a generic error message
                    $login_err = "Invalid username or password.";
                }
            }
        } else {
            // Username doesn't exist, display a generic error message
            $login_err = "Invalid username or password.";
        }
    }
    return require $_SERVER['DOCUMENT_ROOT'] . '/assets/views/' . $view . '.view.php';
}

function getData()
{

    $sql = "SELECT `products`.*, GROUP_CONCAT(images.url SEPARATOR ',') AS images FROM `products` LEFT JOIN `images` ON `images`.`p_id` = `products`.`id` GROUP BY id";
    $res = query($sql);

    $items = $res->fetchAll(PDO::FETCH_CLASS);
    foreach ($items as $item) {
        $item->images = explode(",", $item->images);
    }

    echo json_encode([
        'success'   => true,
        'items'    => $items,
    ]);
}

function getspotlight()
{
    $sql = "SELECT `id`, `name`, `short`, `thumbnail` FROM `products` WHERE `spotlight`=true";
    pullItems($sql);
}

function getnew()
{
    $sql = "SELECT `id`, `name`, `short`, `thumbnail` FROM `products` WHERE deleted_at IS NULL ORDER BY created_at DESC LIMIT 6";
    pullItems($sql);
}

function getrandom()
{
    $sql = "SELECT `id`, `name`, `short`, `thumbnail` FROM `products` WHERE deleted_at IS NULL ORDER BY RAND() LIMIT 6";
    pullItems($sql);
}

function pullItems($sql)
{
    $res = query($sql);

    $items = $res->fetchAll(PDO::FETCH_CLASS);

    echo json_encode([
        'success'   => true,
        'items'    => $items,
    ]);
}
