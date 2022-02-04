<?php

namespace App\Models;

use App\Models\Model;
use App\Libraries\MySql;
use PDO;

class ProductModel extends Model
{
    // Name of the table
    protected $model = "products";

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
     * Load class 'statically'
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

    public function userEducations($userId)
    {
        if ((int)$userId === 0) {
            return false;
        }

        $sql = "SELECT * FROM " . $this->model . " WHERE user_id=" . $userId . " AND deleted_at IS NULL";

        return MySql::query($sql)->fetchAll(PDO::FETCH_CLASS);
    }

    public function getCards()
    {
    }
}
