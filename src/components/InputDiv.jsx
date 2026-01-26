import { JSX } from "react/jsx-runtime"

/**
 * @typedef {React.InputHTMLAttributes<HTMLInputElement>} InputProps
 */
/**
 * 
 * @param {InputProps} props 
 * @returns {JSX.Element}
 */
export const InputDiv = (props)=>{
    const {children, labelFor, ...rest} = props
    return(
        <div className="flex flex-col gap-3 bg-white p-10 rounded-2xl">
            <div>
                <label htmlFor={labelFor} className="text-xl font-bold" >{children}</label>
            </div>
            <input  {...rest} className="w-full p-5 border border-white border-b-blue-950"/>
        </div>
    )
    
}