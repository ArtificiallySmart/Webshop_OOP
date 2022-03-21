<?php
require 'core/core.php';

$var1 = true;
$var2 = true;

if (isset($var1) && isset($var2)) {
    return "var1 and var2 are both set";
} else {
    return "either var1 or var2 is not set";
}

// literal negation
if (!(isset($var1) && isset($var2))) return "either var1 or var2 is not set";
return "var1 and var2 are both set";

// DeMorgan law
if (!isset($var1) || !isset($var2)) return "either var1 or var2 is not set";
return "var1 and var2 are both set";

// more compact
if (!isset($var1, $var2)) return "either var1 or var2 is not set";
return "var1 and var2 are both set";
