<?php

namespace App\Models;

use App\Concerns\Filterable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Task extends Model
{
    use HasFactory;
    use Filterable;

    /**
     * The attributes that should be mass-assignable
     * @var array<int, string>
     */
    protected $fillable = [
        'owner_id',
        'name',
        'priority',
        'project_id'
    ];

    /**
     * The attribute cast types
     * @var array<string, string>
     */
    protected $casts = [
        'priority' => 'int',
    ];

    /**
     * The columns that should be filterable
     * @var array<int, string>
     */
    protected $filterable = [
        'owner_id',
        'project_id'
    ];

    /**
     * Owner's relationship
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    /**
     * Each may belong to a project
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public static function findByPriority(int $priotity): ?Task
    {
        return static::where('priority', $priotity)->first();
    }
}
