import { useEffect, useState } from "react";

export default function Flash({
    type,
    message
}) {
    const [show, setShow] = useState(true);

    const typeClasses = {
        success: 'bg-green-50 text-green-700',
        error: 'bg-red-50 text-red-700',
        info: 'bg-pink-50 text-pink-700',
    }[type];

    useEffect(() => {
        setTimeout(() => setShow(false), 2500);
    });


    return (
        <>
            {
                (message && show) &&
                <div className={`fixed max-w-sm z-50 right-4 top-4 px-3 py-2 shadow ${typeClasses}`}>
                    {message}
                </div>
            }
        </>
    )
}
