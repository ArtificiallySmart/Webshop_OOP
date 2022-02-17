<?php
require 'core/core.php';

if (isset($var1) && isset($var2)) {
    return x;
} else {
    return y;
}

// literal negation
if (!(isset($var1) && isset($var2))) return y;
return x;

// DeMorgan law
if (!isset($var1) || !isset($var2)) return y;
return x;

// more compact
if (!isset($var1, $var2)) return y;
return x;
