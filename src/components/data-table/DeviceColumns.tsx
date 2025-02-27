"use client"
import { ColumnDef } from "@tanstack/react-table"
import IDevice from "../../models/Device"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<typeof IDevice>[] = [
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
