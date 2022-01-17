<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Vintastic</title>

    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./node_modules/bootstrap-icons/font/bootstrap-icons.css">

    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="./assets/css/mainText.css">
    <link rel="stylesheet" href="./assets/css/cards.css">
    <link rel="stylesheet" href="./assets/css/itemCarousel.css">
    <link rel="stylesheet" href="./assets/css/offcanvasCart.css">
    <link rel="stylesheet" href="./assets/css/doublenav.css">
    <link rel="icon" href="./assets/images/favicon.ico" type="image/x-icon">
    <script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="./node_modules/vue/dist/vue.js"></script>

    <script src="./assets/js/components/navbar.js"></script>
    <script src="./assets/js/components/cards.js"></script>
    <script src="./assets/js/components/offcanvasCart.js"></script>
    <script src="./assets/js/components/footer.js"></script>
    <script src="./assets/js/components/footer.js"></script>
    <script src="./assets/js/components/itemCarousel.js"></script>
    <script src="./assets/js/components/newUserForm.js"></script>
    <script src="./assets/js/get.js"></script>
    <script src="./assets/js/validateform.js"></script>
    <script src="node_modules/axios/dist/axios.min.js"></script>
    <script src="./assets/js/vue.js" defer></script>
</head>

<body>
    <!-- Login Modal -->
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="longinModalLabel">Log in</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <?php
                    $username = $password = "";
                    $username_err = $password_err = $login_err = "";
                    require './assets/views/partials/login.php'
                    ?>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    <div id="app">
        <?php require './assets/views/partials/alerts.view.php'; ?>
        <div class="container content-box" id="background">