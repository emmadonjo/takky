import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';
import SelectInput from '@/Components/SelectInput';
import CreateTask from '@/Pages/Tasks/CreateTask';
import TaskList from '@/Pages/Tasks/TaskList';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function Dashboard({ auth, data, projects }) {
    const [filters, setFilters] = useState({
        project_id: route().params.filters?.project_id ?? ''
    });

    const handleFilter = (type, value) => {
        setFilters((prev) => Object.assign(prev, { [type]: value }));

        router.get(route(route().current(), { filters }));
    }


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className='flex justify-end mb-5 gap-x-3 gap-y-5 flex-wrap px-6 py-10'>
                            <SelectInput
                                value={filters.project_id}
                                onChange={(e) => handleFilter('project_id', e.target.value)}
                                options={projects.map((project) => ({
                                    label: project.title,
                                    value: project.id
                                }))}
                                placeholder="Filter by project"
                            />

                            <CreateTask projects={projects}/>
                        </div>

                        {
                            data.length > 0 &&
                            <DndProvider backend={HTML5Backend}>
                                <TaskList tasks={data} projects={projects} />
                            </DndProvider>
                        }

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
