"use client"

import { useEffect, useState } from 'react';
import { columns } from "../../components/data-table/DeviceColumns"
import { IDevice } from '@/models/Device';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  Row,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IDeviceDetails } from '@/models/DeviceDetails';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
  onFlip,
}: DataTableProps<TData, TValue> & {onFlip: (x: string) => void}) {

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 15, // domyślnie 10 wierszy na stronę
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
  })


  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              <TableHead key={'lp'}>L.P.</TableHead>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, index) => (
              <TableRow className='hover:cursor-pointer'
                onClick={async () => {onFlip(row.original._id)}}
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                <TableCell key={index}>{index + 1 + (table.getState().pagination.pageIndex * pagination.pageSize)}</TableCell>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Brak wyników.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
        <div className="flex items-center justify-end space-x-2 py-4">
          <button

            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Poprzednie
          </button>
          <button

            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            następne
          </button>
        </div>
      </div>
    
  )
}


export default function ListPage() {
  const [devices, setDevices] = useState<IDevice[]>([]);
  const [isFlipped, setFlipped] = useState<boolean>(false)
  const [contentAnimTriggered, setContentAnimTriggered] = useState<boolean>(false)
  const [isFirstRender, setFirstRender] = useState<boolean>(true)

  const fetchProducts = async () => {
    const res = await fetch('/api/devices');
    const data = await res.json();
    setDevices(data);
  };

  const getDeviceDetails = async (id: string) => {
    const res = await fetch(`/api/device-details/${id}`, {
      method: 'GET',
    }).then((data) => data.json()).then((x) => setDeviceDetails(x));
  }

  const setDeviceDetails = (deviceDetails: IDeviceDetails) => {
      console.log(deviceDetails)
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if(!isFirstRender){
      setTimeout(() => {
        setContentAnimTriggered(!contentAnimTriggered)
      }, 400)
    }else{
      setFirstRender(false)
    }
  }, [isFlipped])


    return (
      <div className='w-full flex flex-row justify-center'>
        <div className={`flex content-container ${isFlipped ? 'is-flipped' : ''}`}>
          <div className='card-inner'>
          {
            contentAnimTriggered ? 
            <div className='card-back'></div>
            :
            <div className='card-front'>
              <DataTable columns={columns} data={devices} onFlip={(x: string) => {setFlipped(!isFlipped); getDeviceDetails(x)}} />
            </div>
          }
          </div>
        </div>
      </div>
    );
  }