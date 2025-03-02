import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import DeviceDetails from '@/models/DeviceDetails';
import Device from '@/models/Device';

// GET: Read all products
export async function GET() {
  await connectToDatabase();
  const devicesDetails = await DeviceDetails.find({});

  const devices = devicesDetails.map(device => {
    return {
      _id: device._id,
      serialNumber: device.serialNumber,
      deviceType: device.deviceType,
      date: device.date
    }
  })
  return NextResponse.json(devices);
}

// POST: Create a new product
export async function POST(req: NextRequest) {
  await connectToDatabase();
  const body  = await req.json();

  const device = await Device.insertOne(body)
  const deviceDetails = { deviceId: device._id, device};
  const createdDeviceWithDetail = await DeviceDetails.insertOne(deviceDetails);

  return NextResponse.json(device);
}