export type THTTPMethod = 'GET' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type TDevice = {
    id: string
    serialNumber: string
    deviceType: "Urządzenie elektroniczne" | "AGD" | "Materiał budowlany"
    date: string
}