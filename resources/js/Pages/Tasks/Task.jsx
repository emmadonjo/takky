import DeleteTask from '@/Pages/Tasks//DeleteTask';
import EditTask from '@/Pages/Tasks/EditTask';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

export default function Task({ task, changePriority, index, projects }) {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: 'li',
        drop(item) {
            if (!ref.current) {
                return;
            }

            const draggedPriority = item.id;

            if (draggedPriority === index) {
                return;
            }

            changePriority(draggedPriority, index);
        }
    })

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'li',
        item: { id: task.priority, index },
        collect: (monitor) => {
            return {
                isDragging: monitor.isDragging()
            }
        }
    }));

    drag(drop(ref));

    return (
        <li className={`flex flex-col sm:flex-row sm:items-center justify-between flex-wrap gap-x-4 gap-y-2 py-2.5 hover:cursor-pointer bg-gray-50 my-3 hover:bg-gray-100 ${isDragging ? 'opacity-10' : ''}`} ref={ref}>
            <div className='inline-flex gap-x-2 flex-wrap'>
                <span>#{task.priority}</span>
                <span>{task.name}</span>
                {
                    task.project && <span> - ({ task.project.title})</span>
                }
            </div>

            <div>
                <DeleteTask task={task} />
                <EditTask task={task} projects={projects} />
            </div>
        </li>
    )
}
