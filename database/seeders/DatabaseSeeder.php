<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Task;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $user = User::create([
            'name' => 'John Doe',
            'email' => 'johndoe@example.com',
            'password' => Hash::make('password')
        ]);

        $projects = [
            ['title' => 'Tasky'],
            ['title' => 'Info Hub'],
            ['title' => 'Auto Deploy']
        ];

        Project::insert($projects);

        if (!App::isProduction()) {
            Task::factory(9)
                ->for($user, 'owner')
                ->create();
        }
    }
}
