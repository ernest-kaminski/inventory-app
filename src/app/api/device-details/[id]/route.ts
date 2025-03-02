import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectToDatabase from '@/lib/mongodb';
import DeviceDetails from '@/models/DeviceDetails';

// GET: Read all products
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = await params;


  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ message: 'Niepoprawny format ID.' }, { status: 400 });
  }
  try{
    await connectToDatabase();
    console.log(id)
    const deviceDetails = await DeviceDetails.findById(id);
    console.log("TEST:" + deviceDetails)
    if (!deviceDetails) {
      return NextResponse.json({ message: 'Nie znaleziono obiektu o wskazanym id' }, { status: 404 });
    }
    return NextResponse.json(deviceDetails, { status: 200 });
  }catch(error){
    console.error('Error fetching test:', error);
    return NextResponse.json({ message: 'Server error.' }, { status: 500 });
  }
}