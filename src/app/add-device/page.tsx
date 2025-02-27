"use client"

import { useEffect, useState } from 'react';
import Input from '../components/Input';
import { TDevice } from '@/types/types';


export default function AddDevicePage(){
  const [serialNumber, setSerialNumber] = useState<string>('')
  const [deviceType, setDeviceType] = useState<string>('')
  const [date, setDate] = useState<string>('')

  const handleSubmit = async () => {
    var data = {
      serialNumber,
      deviceType,
      date
    }
    console.log(data)
    const res = await fetch('/api/devices', {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  return(
    <div className='w-full py-4 px-8 flex flex-col items-center'>
        <h2 className='text-2xl p-4 font-bold'>Dodaj nowe urządzenie do bazy</h2>
        <div className='flex flex-col'>
            <Input name='Numer Seryjny:' value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)}/>
            <Input name='Typ urządzenia:' value={deviceType} onChange={(e) => setDeviceType(e.target.value)}/>
            <Input name='Data:' value={date} onChange={(e) => setDate(e.target.value)}/>
            <button onClick={handleSubmit}>Zatwiedź</button>
        </div>
    </div>
  )
}

