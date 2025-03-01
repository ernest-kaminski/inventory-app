"use client"

import { useEffect, useState } from 'react';
import Input from '../components/Input';
import { TAdditionalNumbers, TDevice } from '@/types/types';


export default function AddDevicePage(){
  const [serialNumber, setSerialNumber] = useState<string>('')
  const [deviceType, setDeviceType] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [buyPrice, setBuyPrice] = useState<number | undefined>(0)
  const [buyDate, setBuyDate] = useState<string>('')
  const [additionalNumbers, setAdditionalNumbers] = useState<TAdditionalNumbers[]>([])
  const [performerUser, setPerformerUser] = useState<string>('')

  const handleSubmit = async () => {
    setPerformerUser('TestUser');

    var data = {
      serialNumber,
      deviceType,
      date,
      buyPrice,
      buyDate,
      additionalNumbers,
      performerUser
    }

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
            <Input type='number' name='Cena zakupu:' value={buyPrice} onChange={(e) => setBuyPrice(e.target.valueAsNumber)}/>
            <Input name='Data zakupu:' value={date} onChange={(e) => setDate(e.target.value)}/>
            <Input name='Data:' value={date} onChange={(e) => setDate(e.target.value)}/>
            <button onClick={handleSubmit}>Zatwierdź</button>
        </div>
    </div>
  )
}

