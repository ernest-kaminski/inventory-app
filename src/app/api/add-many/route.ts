import { NextResponse } from 'next/server';
import DeviceDetails from '@/models/DeviceDetails';
import Device from '@/models/Device';
import connectToDatabase from '@/lib/mongodb';


export async function POST(req: Request, ) {
  try {
    await connectToDatabase();
    const body = await req.json(); // Pobranie danych z żądania

    // Sprawdzenie, czy dane są tablicą
    if (!Array.isArray(body)) {
      return NextResponse.json({ success: false, error: 'Invalid data format, expected an array of products.' }, { status: 400 });
    }

    const createdDevices = await Device.insertMany(body);
    const ids = createdDevices.map((device) => device._id); 

    const createdDevicesWithDetails = body.map((newBody, index) => {
        return {deviceId: createdDevices[index]._id, ...newBody}
    })

    const newDevicesWithDetails = await DeviceDetails.insertMany(createdDevicesWithDetails); // Zapisanie wielu produktów naraz w bazie danych

    return NextResponse.json({ success: true, data: newDevicesWithDetails }, { status: 201 }); // Odpowiedź z dodanymi produktami
  } catch (error) {
    const err = error as Error;
    return NextResponse.json({ success: false, error: err.message }, { status: 500 }); // Obsługa błędów
  }
}