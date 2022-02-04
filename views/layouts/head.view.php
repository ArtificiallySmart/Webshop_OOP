<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Vintastic</title>

    <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="/node_modules/bootstrap-icons/font/bootstrap-icons.css">

    <link rel="stylesheet" href="/public/css/main.css">
    <link rel="stylesheet" href="/public/css/mainText.css">
    <link rel="stylesheet" href="/public/css/cards.css">
    <link rel="stylesheet" href="/public/css/itemCarousel.css">
    <link rel="stylesheet" href="/public/css/offcanvasCart.css">
    <link rel="stylesheet" href="/public/css/doublenav.css">
    <link rel="icon" href="/public/images/favicon.ico" type="image/x-icon">

    <script src="/node_modules/vue/dist/vue.js"></script>
    <script src="/node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>

    <script src="/public/js/components/double-nav.js"></script>
    <script src="/public/js/components/cards.js"></script>
    <script src="/public/js/components/offcanvasCart.js"></script>
    <script src="/public/js/components/footer.js"></script>
    <script src="/public/js/components/item-carousel.js"></script>
    <script src="/public/js/components/new-user-form.js"></script>
    <script src="/public/js/components/login-modal.js"></script>

    <script src="/public/js/get.js"></script>
    <script src="/node_modules/axios/dist/axios.min.js"></script>

    <script src="/public/js/vue.js" defer></script>
</head>

<body>

    <div id="app">
        <login-modal></login-modal>
        <?php require '/views/partials/alerts.view.php'; ?>
        <div class="container content-box" id="background">
            <double-nav :link=true :logged_in=loggedIn></double-nav>