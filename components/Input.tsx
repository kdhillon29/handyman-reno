

 interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {

 label?: string
 className?: string
}

const Input = ({  className, ...props }: InputProps) => {
  return (
    <input  className={`w-full bg-neutral-50 text-gray-700 p-3 rounded-lg shadow-md
    focus:outline-none
    focus:ring-2
    focus:ring-primary/40
    placeholder:text-yellow-800/40
    border
    ${className}
    `}
     {...props} />
  )
}

export default Input