import Task from "@/Pages/Tasks/Task";
import { router } from "@inertiajs/react";

export default function TaskList({ tasks, projects }) {
    const changePriority = (dragIndex, index) => {

        router.post(route('tasks.re-order'), {
            dragged: dragIndex,
            hovered: index
        });
    };

    return (
        <div className='px-6 max-w-6xl mx-auto py-10'>
            <ul>
                {
                    tasks.map((task) => (
                        <Task task={task} key={task.priority} projects={projects} changePriority={changePriority } index={task.priority} />
                    ))
                }
            </ul>
        </div>
    )
}
