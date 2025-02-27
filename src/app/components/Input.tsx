import React from 'react';

interface InputProps {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

export default function Input({name, value, onChange}: InputProps){
    return(
        <div className='flex flex-row p-2 border'>
            <label htmlFor={name}>{name}</label>
            <input type='text' id={name} value={value }onChange={(e) => onChange(e)}/>
        </div>
    )
}