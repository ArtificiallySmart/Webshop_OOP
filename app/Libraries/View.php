<?php

namespace App\Libraries;

class View
{
    public static function render($view, array $vars = null)
    {
        // Default view folder
        $folder = '/views/';

        // Get rid of unwanted slashes at begining and end of view file
        $view = ltrim($view, "/");
        $view = rtrim($view, "/");

        // Search for slashes (and though: sub-folders)
        $slashPos = strpos($view, '/');
        if ($slashPos !== false) {
            $folder .= substr($view, 0, $slashPos);
            $view = substr($view, $slashPos);
        }

        if (file_exists($_SERVER['DOCUMENT_ROOT'] . $folder . $view . '.php')) {
            if (is_array($vars)) {
                foreach ($vars as $key => $var) {
                    $$key = $var;
                }
            }

            require $_SERVER['DOCUMENT_ROOT'] . $folder . $view . '.php';
        } else {
            require $_SERVER['DOCUMENT_ROOT'] . '/views/errors/404.view.php';
        }
    }

    /**
     * Redirect to a given URI
     * @param $uri (string) the URI to redirect to
     */
    public static function redirect($uri)
    {
        header("Location: //" . $_SERVER['HTTP_HOST'] . '/' . ltrim($uri, '/'), true);
    }
}
