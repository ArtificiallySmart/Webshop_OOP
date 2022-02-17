<?php

/** --------------------------------------------------------------------------------------------------------
 * Add your routes here.
 * At this point, variables in a route are not supported like in Laravel: user/{user_id}/edit
 *  I add this in a future version.
 * 
 * Protect your routes with one ore more Middleware classes, like WhenNotLoggedIn or Permissions.
 *  See the classes for more information.
 * Add Middleware in an associative array with a key, like the admin route
 * ---------------------------------------------------------------------------------------------------------
 */

use App\Middleware\WhenNotLoggedin;
use App\Middleware\Permissions;

$router->get('', 'App/Controllers/HomeController.php@index');
$router->get('home', 'App/Controllers/HomeController.php@index');
$router->get('home/products', 'App/Controllers/HomeController.php@products');
$router->get('home/spotlight', 'App/Controllers/HomeController.php@getSpotlight');
$router->get('home/new', 'App/Controllers/HomeController.php@getNew');
$router->get('home/random', 'App/Controllers/HomeController.php@getRandom');

$router->get('categories', 'App/Controllers/CategoryController.php@index');
$router->get('categories/getList', 'App/Controllers/CategoryController.php@getCategories');
$router->get('categories/getByCategory', 'App/Controllers/CategoryController.php@getByCategory');

$router->get('search', 'App/Controllers/SearchController.php@index');

$router->get('items/{id}', 'App/Controllers/ItemController.php@index');
$router->get('items/{id}/get', 'App/Controllers/ItemController.php@get');

$router->get('login', 'App/Controllers/LoginController.php@logout');
$router->post('login', 'App/Controllers/LoginController.php@verifyLogin');

$router->get('logout', 'App/Controllers/LoginController.php@logout');


$router->get('checkout', 'App/Controllers/CheckoutController.php@index');

$router->get('contact', 'App/Controllers/ContactController.php@index');

$router->get('register', 'App/Controllers/RegisterController.php@index');
$router->post('register', 'App/Controllers/RegisterController.php@store');
$router->post('register/validate', 'App/Controllers/RegisterController.php@validate');

$router->get('admin', 'App/Controllers/AdminController.php@index', [
    'auth' => WhenNotLoggedin::class,
]);

$router->get('user', 'App/Controllers/UserController.php@index');
$router->post('cart', 'App/Controllers/ShoppingCartController.php@getCart');
