export default function SelectInput({
    options,
    className = '',
    ...props
}) {
    return (
        <select {...props} className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ${className}`}>
            <option value="">{ props.placeholder ? props.placeholder : 'Select' }</option>
            {
                options.map((option, index) => (
                    <option value={option.value} key={index}>{ option.label }</option>
                ))
            }
        </select>
    )
}
