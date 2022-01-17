<?php

function index($view)
{
    session_destroy();
    header("location: /");
}
