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
        'user_id',
        'updated_at',
        'deleted_at',
        'updated_by',
        'deleted_by',
    ];

    protected $userId;

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

    public function getUserData()
    {
        return $this->get($this->getCurrentUser());
    }

    public function getUserAddress()
    {
        $query = "SELECT * FROM `addresses` WHERE `user_id` = " . $this->getCurrentUser();
        return MySql::query($query)->fetch(PDO::FETCH_OBJ);
    }

    /**
     * Check if user exists by a given field
     * @param string $field The field to check.
     * @param string $value The value which should be checked.
     * @param int $id optional: the users ID 
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
