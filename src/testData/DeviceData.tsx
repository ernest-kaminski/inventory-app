export type Device = {
    _id: string
    serialNumber: string
    deviceType: "Urządzenie elektroniczne" | "AGD" | "Materiał budowlany"
    date: string
}

export const devices: Device[] = [
    {
        _id: "1ldksia22",
        serialNumber: "TZN12300",
        deviceType: "Urządzenie elektroniczne",
        date: new Date().toString()
    },
    {
        _id: "241edd",
        serialNumber: "TZN12301",
        deviceType: "AGD",
        date: new Date().toString()
    },
    {
        _id: "1ldksiae12e22",
        serialNumber: "TZN12302",
        deviceType: "Materiał budowlany",
        date: new Date().toString()
    },
    {
        _id: "1ldksiwdcca22",
        serialNumber: "TZN12303",
        deviceType: "Urządzenie elektroniczne",
        date: new Date().toString()
    },
] 