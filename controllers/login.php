<?php

function index($view)
{

    // Define variables and initialize with empty values
    $username = $password = "";
    $username_err = $password_err = $login_err = "";

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
