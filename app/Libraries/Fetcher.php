<?php

namespace App\Libraries;

use App\Helpers\Helper;
use App\Libraries\MySql;
use Exception;
use PDO;

class Fetcher
{
    private $results;
    private $success;
    private $message;

    public function tryFetch(string $query, bool $all = true)
    {
        try {
            $this->results = $all
                ? MySql::query($query)->fetchAll(PDO::FETCH_CLASS)
                : MySql::query($query)->fetch(PDO::FETCH_CLASS);
            $this->success = true;
            $this->message = "Success";
        } catch (Exception $e) {
            $this->results = null;
            $this->success = false;
            $this->message = $e->getMessage();
        }
    }

    public function explode($field)
    {
        foreach ($this->results as $result) {
            $result->$field = explode(",", $result->$field);
        }
    }

    public function echo($varName)
    {
        echo json_encode([
            "success" => $this->success,
            "message" => $this->message,
            "$varName" => $this->results,
        ]);
    }
}
