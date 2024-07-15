import { useForm } from "@inertiajs/react"
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import { useState } from "react";

export default function DeleteTask({
    task
}) {
    const [showModal, setShowModal] = useState(false);

    const {
        processing,
        delete: destroy
    } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        destroy(route('tasks.destroy', task.id), {
            preserveScroll: true
        });
    }

    return (
        <>
            <button type="button" className="text-xs text-red-600 px-2 hover:text-red-400" onClick={() => setShowModal(true)}>Delete</button>

            <Modal show={showModal} maxWidth="sm" onClose={() => setShowModal(false)}>
                <form onSubmit={submit} className="py-10 px-6">
                    <h2 className="uppercase text-center my-8 text-xl">Delete <strong>{task.name}?</strong></h2>

                    <p className="mb-4">This action will remove <strong>{task.name}</strong> completely from the tasks' list.</p>

                    <p className="mb-4">Continue with this action?</p>

                    <PrimaryButton type="submit" className="bg-red-600" spin={processing} disabled={processing}>
                        Yes, Delete
                    </PrimaryButton>
                </form>
            </Modal>
        </>
    )
}
