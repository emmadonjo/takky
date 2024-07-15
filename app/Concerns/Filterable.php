<?php

namespace App\Concerns;

use Illuminate\Database\Eloquent\Builder;

trait Filterable
{
    public function scopeFilter(Builder $builder, array $filters): Builder
    {
        $filterable = $this->filterable ?? [];

        if (empty($filterable)) {
            return $builder;
        }

        foreach($filters as $column => $value) {
            if (!in_array($column, $filterable)) {
                continue;
            }

            if ($value == '' || $value == null) {
                continue;
            }

            $builder->where($column, $value);
        }

        return $builder;
    }
}
