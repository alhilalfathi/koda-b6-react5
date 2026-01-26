import { JSX } from "react/jsx-runtime"
/**
 * @typedef {React.InputHTMLAttributes<HTMLInputElement>} InputProps
 */

/**
 * 
 * @param {InputProps} props 
 * @returns {JSX.Element}
 */
export const InputRadio = (props) => {
    const {children, value1, value2, id1, id2, labelValue1, labelValue2, ...rest} = props
  return (
    <div className="bg-white p-10 rounded-2xl">
         <div >
             <label className="text-xl font-bold" >{children}</label>
        </div>
        <div className="flex gap-2 py-5">
            <input id={id1} value={value1} {...rest}/>
            <label htmlFor={labelValue1}>{value1}</label>
            <input id={id2} value={value2} {...rest}/>
            <label htmlFor={labelValue2}>{value2}</label>
        </div>
    </div>
  )
}
