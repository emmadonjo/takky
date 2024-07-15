import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import Modal from '@/Components/Modal';
import { useState } from 'react';

export default function CreateTask({ projects }) {
    const [showModal, setShowModal] = useState(false);

    const {
        data,
        processing,
        setData,
        errors,
        post,
        clearErrors
    } = useForm({
        name: '',
        project_id: ''
    });

    const submit = (e) => {
        e.preventDefault();

        clearErrors();
        post(route('tasks.store'), {
            onSuccess: (page) => setShowModal(false)
        });
    };
    return (
        <>
            <PrimaryButton type="button" onClick={() => setShowModal(true)}>
                Create Task
            </PrimaryButton>

            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <form onSubmit={submit} className="w-full sm:max-w-2xl mx-auto py-10 px-6">
                    <h2 className='my-10 text-center text-2xl font-semibold'>Create a New Task</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6'>
                        <div>
                            <InputLabel htmlFor="name" required>Task Name</InputLabel>
                            <TextInput
                                id="name"
                                className="block w-full"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder="Enter Name"
                                required
                                maxLength={255}
                            />
                            <InputError message={errors.name} />
                        </div>

                        <div>
                            <InputLabel htmlFor="project">Select Project</InputLabel>
                            <SelectInput
                                options={projects.map((project) => ({
                                    label: project.title,
                                    value: project.id
                                }))}
                                onChange={(e) => setData('project_id', e.target.value)}
                                id="project"
                                placeholder="Select project"
                                className='block w-full'
                                value={data.project_id}
                            />
                            <InputError message={errors.project} />
                        </div>
                    </div>

                    <PrimaryButton className='mt-6' disabled={processing} spin={processing}>
                        Submit
                    </PrimaryButton>
                </form>
            </Modal>
        </>
    );
}
