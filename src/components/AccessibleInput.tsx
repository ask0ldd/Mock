import { ChangeEvent } from "react"
import '../style/AccessibleInput.css'

function AccessibleInput({ label, id, value, onChange, mandatoryStar } : IProps){

    return(
        <div className='inputGroup'>
            <label htmlFor={id}>{label} {mandatoryStar &&<span style={{color:'#DC4E49'}}>*</span>}</label>
            <input
                type="text"
                id={id}
                value={value}
                onChange={onChange}
                aria-labelledby={id}
            />
        </div>
    )
}

export default AccessibleInput

interface IProps{
    label : string
    id : string
    value : string
    onChange : (e: ChangeEvent<HTMLInputElement>) => unknown
    mandatoryStar : boolean
}