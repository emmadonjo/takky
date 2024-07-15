<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskRequest;
use App\Models\Project;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index()
    {
        $filters = request('filters', []);

        // ensure the queried tasks belong to the currently authenticated user
        $filters = array_merge($filters, ['owner_id' => auth()->id()]);

        $tasks = Task::with('project')
            ->filter($filters)
            ->orderBy('priority', 'asc')
            ->get();

        return Inertia::render('Dashboard', [
            'data' => $tasks,
            'projects' => fn() => Project::orderBy('title', 'asc')->get()
        ]);
    }


    public function store(TaskRequest $request)
    {
        $data = $request->validated();
        $data['owner_id'] = auth()->id();
        $priority = Task::max('priority') ?? 0;
        $data['priority'] = $priority + 1;

        Task::create($data);

        session()->flash('flash', [
            'type' => 'success',
            'message' => 'Task successfully created.'
        ]);

        return to_route('dashboard');
    }

    public function update(TaskRequest $request, Task $task)
    {
        abort_unless($task->owner_id === auth()->id(), 403);

        $data = $request->validated();

        $task->update($data);

        session()->flash('flash', [
            'type' => 'success',
            'message' => 'Task successfully updated.'
        ]);

        return to_route('tasks.index');
    }

    public function destroy(Task $task)
    {
        abort_unless($task->owner_id === auth()->id(), 403);

        $task->delete();

        session()->flash('flash', [
            'type' => 'success',
            'message' => 'Task successfully deleted.'
        ]);


        return to_route('dashboard');
    }

    public function reOrder(Request $request)
    {
        $request->validate([
            'dragged' => 'required|exists:tasks,priority',
            'hovered' => 'required|exists:tasks,priority'
        ]);

        $dragged = $request->dragged;
        $hovered = $request->hovered;

        // ensure dragged and hovered tasks aren't the same

        if ($dragged === $hovered) {
            return to_route('dashboard');
        }

        $this->reOrderTask($hovered, $dragged);

        return redirect()->route('dashboard');
    }

    protected function reOrderTask(int $new_order, int $previous_order): bool
    {
        $movedTask = Task::findByPriority($previous_order);
        $taskToReplace = Task::findByPriority($new_order);

        $movedTask->update(['priority' => $new_order]);
        $taskToReplace->update(['priority' => $previous_order]);

        return true;
    }
}
