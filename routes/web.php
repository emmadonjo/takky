<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::get('/dashboard', [TaskController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::middleware('verified')
        ->group(function () {
            Route::post('re-order', [TaskController::class, 'reOrder'])->name('tasks.re-order');

            Route::resource('/tasks', TaskController::class)
                ->only([
                    'index',
                    'store',
                    'update',
                    'destroy'
                ]);
        });
});

require __DIR__.'/auth.php';
