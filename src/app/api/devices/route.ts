import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Device from '@/models/Device';

// GET: Read all products
export async function GET() {
  await connectToDatabase();
  const devices = await Device.find({});
  return NextResponse.json(devices);
}

// POST: Create a new product
export async function POST(req: NextRequest) {
  await connectToDatabase();
  const { serialNumber, deviceType, date } = await req.json();
  console.log(serialNumber)
  console.log(deviceType)
  console.log(date)
  const device = new Device({ serialNumber, deviceType, date });
  await device.save();
  return NextResponse.json(device);
}