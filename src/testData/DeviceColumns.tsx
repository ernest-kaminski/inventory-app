"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Device } from "./DeviceData"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Device>[] = [
  {
    accessorKey: "serialNumber",
    header: "Numer Seryjny",
  },
  {
    accessorKey: "deviceType",
    header: "DeviceType",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
]
