import React, { type ReactHTMLElement } from 'react'

interface InputFieldProps {
    label: string,
    type : 'text' | 'password' | 'email',
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    required?: boolean
}

export default function InputField({label, type, value, onChange, required = false}: InputFieldProps) {
    return (
        <div className='input-group'>
            <label>{label}</label>
            <input
            type={type}
            value={value}
            onChange={onChange}
            required = {required}
            />
        </div>
    );
}