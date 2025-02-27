import { NextResponse } from 'next/server';
import Device from '@/models/Device';
import dbConnect from '@/lib/mongodb';

export async function POST(req: Request) {
  try {
    await dbConnect(); // Nawiązanie połączenia z bazą danych
    const body = await req.json(); // Pobranie danych z żądania

    // Sprawdzenie, czy dane są tablicą
    if (!Array.isArray(body)) {
      return NextResponse.json({ success: false, error: 'Invalid data format, expected an array of products.' }, { status: 400 });
    }

    const newProducts = await Device.insertMany(body); // Zapisanie wielu produktów naraz w bazie danych

    return NextResponse.json({ success: true, data: newProducts }, { status: 201 }); // Odpowiedź z dodanymi produktami
  } catch (error) {
    const err = error as Error;
    return NextResponse.json({ success: false, error: err.message }, { status: 500 }); // Obsługa błędów
  }
}