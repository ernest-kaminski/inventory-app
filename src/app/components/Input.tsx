import React from 'react';

interface InputProps {
    name: string;
    type?: string;
    value: string | number | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

export default function Input({name, value, type = 'text', onChange}: InputProps){
    return(
        <div className='flex flex-row my-1 custom-input w-[480px]'>
            <label htmlFor='input' className='text'>{name}</label>
            <input className='input' name='input' type={type} id={name} value={value} onChange={(e) => onChange(e)}/>
        </div>
    )
}