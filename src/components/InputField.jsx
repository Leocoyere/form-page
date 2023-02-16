import { useState } from "react"

export function InputField({label, type, name}) {

    const [isTrigger, setTriggerState] = useState(false)
    const [isPasswordVisible, setPasswordVisibility] = useState(false)

    const handleOnBlur = (e) => {
        if(!e.target.value) setTriggerState(false)
    }

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!isPasswordVisible)
    }

    return (
        <div className="input-wrapper">
            <label htmlFor={name} className={`input-wrapper__label ${isTrigger ? 'input-wrapper__label--triggered' : null}`}>{label}</label>
            <input onFocus={() => setTriggerState(true)} onBlur={(e) => handleOnBlur(e)} type={isPasswordVisible ? 'text' : type} name={name} className="input-wrapper__field" />
            {
                type === 'password' ?
                    <svg onClick={() => { togglePasswordVisibility() }} className={`input-wrapper__icon ${isPasswordVisible ? 'input-wrapper__icon--triggered' : null}`} width="45" height="33" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 9.58337C11.697 9.58337 5.83537 19.1057 4.26899 22.106C4.05651 22.513 3.95027 22.7165 3.96302 22.9867C3.97577 23.2568 4.10262 23.4524 4.35631 23.8435C6.26485 26.7856 13.2566 36.4167 23 36.4167C32.7435 36.4167 39.7352 26.7856 41.6438 23.8435C41.8975 23.4524 42.0243 23.2568 42.0371 22.9867C42.0498 22.7165 41.9436 22.513 41.7311 22.106C40.1647 19.1057 34.303 9.58337 23 9.58337Z" />
                        <circle cx="23" cy="23" r="7.66667" />
                    </svg>
                : null 
            }
        </div>
    )
}