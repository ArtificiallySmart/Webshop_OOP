<?php

namespace App\Models;

use App\Libraries\MySql;
use App\Libraries\QueryBuilder;
use PDO;

class UserModel extends Model
{
    // Name of the table
    protected $model = "users";

    // Max number of records when fetching all records from table
    protected $limit;

    // Non writable fields
    protected $protectedFields = [
        'id',
        'updated_at',
        'deleted_at',
        'updated_by',
        'deleted_by',
    ];

    /**
     * Load class 'staticaly'
     */
    public static function load()
    {
        return new static;
    }

    public function __construct()
    {
        parent::__construct(
            $this->model,
            $this->limit,
            $this->protectedFields
        );
    }

    /**
     * Check if user exists by email
     * @param $email (string) the email address
     * @param $id (int) optional: the users ID 
     */
    public static function exists($field, $value, int $id = null)
    {
        $query = "SELECT user_id FROM `users` WHERE `$field`='" . $value . "'" . ($id !== null ? " AND id<>" . $id : "");

        $result = MySql::query($query)->fetch();

        return $result !== false;
    }

    /**
     * Try to get a user ID from session
     */
    private function getCurrentUser()
    {
        return isset($_SESSION) &&
            isset($_SESSION['user']) &&
            isset($_SESSION['user']['uid']) ? $_SESSION['user']['uid'] : null;
    }
}
