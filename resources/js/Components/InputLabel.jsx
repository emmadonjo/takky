export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium text-sm text-gray-700 ${className} ${props.required ? 'after:content-["*"] after:text-red-600 after:ml-1' : ''}`}>
            {value ? value : children}
        </label>
    );
}
