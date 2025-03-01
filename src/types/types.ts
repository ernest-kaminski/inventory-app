export type THTTPMethod = 'GET' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type TAdditionalNumbers = {
    label: string
    value: string
}

export type TDevice = {
    serialNumber: string
    deviceType: "Urządzenie elektroniczne" | "AGD" | "Materiał budowlany"
    date: string
}

export type TDeviceDetails = TDevice & {
    buyPrice?: number
    buyDate?: string
    additionalNumbers?: TAdditionalNumbers[]
    performerUser?: string
}


export const devices: TDevice[] = [
    { serialNumber: "ELX-001", deviceType: "Urządzenie elektroniczne", date: "2023-05-10" },
    { serialNumber: "AGD-002", deviceType: "AGD", date: "2022-11-15" },
    { serialNumber: "MTR-003", deviceType: "Materiał budowlany", date: "2024-02-08" },
    { serialNumber: "ELX-004", deviceType: "Urządzenie elektroniczne", date: "2023-03-18" },
    { serialNumber: "AGD-005", deviceType: "AGD", date: "2021-09-30" },
    { serialNumber: "MTR-006", deviceType: "Materiał budowlany", date: "2024-07-12" },
    { serialNumber: "ELX-007", deviceType: "Urządzenie elektroniczne", date: "2023-01-27" },
    { serialNumber: "AGD-008", deviceType: "AGD", date: "2022-12-05" },
    { serialNumber: "MTR-009", deviceType: "Materiał budowlany", date: "2024-04-19" },
    { serialNumber: "ELX-010", deviceType: "Urządzenie elektroniczne", date: "2023-08-14" },
    { serialNumber: "AGD-011", deviceType: "AGD", date: "2022-10-07" },
    { serialNumber: "MTR-012", deviceType: "Materiał budowlany", date: "2024-06-30" },
    { serialNumber: "ELX-013", deviceType: "Urządzenie elektroniczne", date: "2023-09-21" },
    { serialNumber: "AGD-014", deviceType: "AGD", date: "2022-04-12" },
    { serialNumber: "MTR-015", deviceType: "Materiał budowlany", date: "2024-03-03" },
    { serialNumber: "ELX-016", deviceType: "Urządzenie elektroniczne", date: "2023-07-17" },
    { serialNumber: "AGD-017", deviceType: "AGD", date: "2022-02-28" },
    { serialNumber: "MTR-018", deviceType: "Materiał budowlany", date: "2024-09-16" },
    { serialNumber: "ELX-019", deviceType: "Urządzenie elektroniczne", date: "2023-11-01" },
    { serialNumber: "AGD-020", deviceType: "AGD", date: "2022-06-13" },
    { serialNumber: "MTR-021", deviceType: "Materiał budowlany", date: "2024-08-25" },
    { serialNumber: "ELX-022", deviceType: "Urządzenie elektroniczne", date: "2023-05-20" },
    { serialNumber: "AGD-023", deviceType: "AGD", date: "2022-09-22" },
    { serialNumber: "MTR-024", deviceType: "Materiał budowlany", date: "2024-11-05" },
    { serialNumber: "ELX-025", deviceType: "Urządzenie elektroniczne", date: "2023-03-10" },
    { serialNumber: "AGD-026", deviceType: "AGD", date: "2022-12-01" },
    { serialNumber: "MTR-027", deviceType: "Materiał budowlany", date: "2024-01-18" },
    { serialNumber: "ELX-028", deviceType: "Urządzenie elektroniczne", date: "2023-09-08" },
    { serialNumber: "AGD-029", deviceType: "AGD", date: "2022-08-19" },
    { serialNumber: "MTR-030", deviceType: "Materiał budowlany", date: "2024-10-02" },
    { serialNumber: "ELX-031", deviceType: "Urządzenie elektroniczne", date: "2023-06-25" },
    { serialNumber: "AGD-032", deviceType: "AGD", date: "2022-07-30" },
    { serialNumber: "MTR-033", deviceType: "Materiał budowlany", date: "2024-09-10" },
    { serialNumber: "ELX-034", deviceType: "Urządzenie elektroniczne", date: "2023-02-11" },
    { serialNumber: "AGD-035", deviceType: "AGD", date: "2022-11-17" },
    { serialNumber: "MTR-036", deviceType: "Materiał budowlany", date: "2024-05-27" },
    { serialNumber: "ELX-037", deviceType: "Urządzenie elektroniczne", date: "2023-04-30" },
    { serialNumber: "AGD-038", deviceType: "AGD", date: "2022-06-23" },
    { serialNumber: "MTR-039", deviceType: "Materiał budowlany", date: "2024-03-29" },
    { serialNumber: "ELX-040", deviceType: "Urządzenie elektroniczne", date: "2023-07-14" },
    { serialNumber: "AGD-041", deviceType: "AGD", date: "2022-08-12" },
    { serialNumber: "MTR-042", deviceType: "Materiał budowlany", date: "2024-07-09" },
    { serialNumber: "ELX-043", deviceType: "Urządzenie elektroniczne", date: "2023-09-06" },
    { serialNumber: "AGD-044", deviceType: "AGD", date: "2022-10-29" },
    { serialNumber: "MTR-045", deviceType: "Materiał budowlany", date: "2024-11-11" },
    { serialNumber: "ELX-046", deviceType: "Urządzenie elektroniczne", date: "2023-05-19" },
    { serialNumber: "AGD-047", deviceType: "AGD", date: "2022-12-03" },
    { serialNumber: "MTR-048", deviceType: "Materiał budowlany", date: "2024-02-22" },
    { serialNumber: "ELX-049", deviceType: "Urządzenie elektroniczne", date: "2023-01-31" },
    { serialNumber: "AGD-050", deviceType: "AGD", date: "2022-03-07" },
    { serialNumber: "MTR-051", deviceType: "Materiał budowlany", date: "2024-08-18" },
    { serialNumber: "ELX-052", deviceType: "Urządzenie elektroniczne", date: "2023-04-05" },
    { serialNumber: "AGD-053", deviceType: "AGD", date: "2022-06-09" },
    { serialNumber: "MTR-054", deviceType: "Materiał budowlany", date: "2024-10-17" },
    { serialNumber: "ELX-055", deviceType: "Urządzenie elektroniczne", date: "2023-03-12" },
    { serialNumber: "AGD-056", deviceType: "AGD", date: "2022-08-27" },
    { serialNumber: "MTR-057", deviceType: "Materiał budowlany", date: "2024-09-24" },
    { serialNumber: "ELX-058", deviceType: "Urządzenie elektroniczne", date: "2023-06-07" },
    { serialNumber: "AGD-059", deviceType: "AGD", date: "2022-12-25" },
    { serialNumber: "MTR-060", deviceType: "Materiał budowlany", date: "2024-04-21" },
    { serialNumber: "ELX-061", deviceType: "Urządzenie elektroniczne", date: "2023-07-18" },
    { serialNumber: "AGD-062", deviceType: "AGD", date: "2022-11-22" },
    { serialNumber: "MTR-063", deviceType: "Materiał budowlany", date: "2024-02-10" },
    { serialNumber: "ELX-064", deviceType: "Urządzenie elektroniczne", date: "2023-01-22" },
    { serialNumber: "AGD-065", deviceType: "AGD", date: "2022-03-18" },
    { serialNumber: "MTR-066", deviceType: "Materiał budowlany", date: "2024-10-15" },
    { serialNumber: "ELX-067", deviceType: "Urządzenie elektroniczne", date: "2023-02-05" },
    { serialNumber: "AGD-068", deviceType: "AGD", date: "2022-05-21" },
    { serialNumber: "MTR-069", deviceType: "Materiał budowlany", date: "2024-07-14" },
    { serialNumber: "ELX-070", deviceType: "Urządzenie elektroniczne", date: "2023-03-02" },
    { serialNumber: "AGD-071", deviceType: "AGD", date: "2022-09-05" },
    { serialNumber: "MTR-072", deviceType: "Materiał budowlany", date: "2024-06-28" },
    { serialNumber: "ELX-073", deviceType: "Urządzenie elektroniczne", date: "2023-08-31" },
    { serialNumber: "AGD-074", deviceType: "AGD", date: "2022-04-17" },
    { serialNumber: "MTR-075", deviceType: "Materiał budowlany", date: "2024-01-05" },
    { serialNumber: "ELX-076", deviceType: "Urządzenie elektroniczne", date: "2023-05-22" },
    { serialNumber: "AGD-077", deviceType: "AGD", date: "2022-10-20" },
    { serialNumber: "MTR-078", deviceType: "Materiał budowlany", date: "2024-08-23" },
    { serialNumber: "ELX-079", deviceType: "Urządzenie elektroniczne", date: "2023-02-18" },
    { serialNumber: "AGD-080", deviceType: "AGD", date: "2022-07-11" },
    { serialNumber: "MTR-081", deviceType: "Materiał budowlany", date: "2024-11-14" },
    { serialNumber: "ELX-082", deviceType: "Urządzenie elektroniczne", date: "2023-04-15" },
    { serialNumber: "AGD-083", deviceType: "AGD", date: "2022-06-03" },
    { serialNumber: "MTR-084", deviceType: "Materiał budowlany", date: "2024-10-28" },
    { serialNumber: "ELX-085", deviceType: "Urządzenie elektroniczne", date: "2023-07-10" },
    { serialNumber: "AGD-086", deviceType: "AGD", date: "2022-08-07" },
    { serialNumber: "MTR-087", deviceType: "Materiał budowlany", date: "2024-09-02" },
    { serialNumber: "ELX-088", deviceType: "Urządzenie elektroniczne", date: "2023-09-09" },
    { serialNumber: "AGD-089", deviceType: "AGD", date: "2022-10-11" },
    { serialNumber: "MTR-090", deviceType: "Materiał budowlany", date: "2024-07-31" },
    { serialNumber: "ELX-091", deviceType: "Urządzenie elektroniczne", date: "2023-02-03" },
    { serialNumber: "AGD-092", deviceType: "AGD", date: "2022-09-27" },
    { serialNumber: "MTR-093", deviceType: "Materiał budowlany", date: "2024-03-24" },
    { serialNumber: "ELX-094", deviceType: "Urządzenie elektroniczne", date: "2023-05-28" },
    { serialNumber: "AGD-095", deviceType: "AGD", date: "2022-07-06" },
    { serialNumber: "MTR-096", deviceType: "Materiał budowlany", date: "2024-06-20" },
    { serialNumber: "ELX-097", deviceType: "Urządzenie elektroniczne", date: "2023-09-03" },
    { serialNumber: "AGD-098", deviceType: "AGD", date: "2022-03-22" },
    { serialNumber: "MTR-099", deviceType: "Materiał budowlany", date: "2024-08-12" },
    { serialNumber: "ELX-100", deviceType: "Urządzenie elektroniczne", date: "2023-11-07" }
];