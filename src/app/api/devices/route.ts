import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Device from '@/models/Device';
import DeviceDetails from '@/models/DeviceDetails';

// GET: Read all products
export async function GET() {
  await connectToDatabase();
  const devices = await Device.find({});
  return NextResponse.json(devices);
}

// POST: Create a new product
export async function POST(req: NextRequest) {
  await connectToDatabase();
  const { serialNumber, deviceType, date, buyPrice, buyDate, additionalNumbers, performerUser } = await req.json();
  const device = new DeviceDetails(
    { 
      serialNumber,
      deviceType,
      date,
      buyPrice, 
      buyDate,
      additionalNumbers,
      performerUser
    }
  );
  await device.save();
  return NextResponse.json(device);
}