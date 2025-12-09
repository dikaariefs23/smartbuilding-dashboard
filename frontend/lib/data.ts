export const buildingData = {
  name: "Gedung A",
  summary: {
    energyTodayKwh: 1250,
    avgTemperature: 24.5,
    avgCO2: 650
  },
  rooms: [
    { id: 1, name: "Ruang Meeting 1.1", floor: 1, temperature: 24.0, co2: 700, status: "Normal" },
    { id: 2, name: "Ruang Kerja 2.3", floor: 2, temperature: 26.5, co2: 900, status: "Warning" },
    { id: 3, name: "Server Room 1.2", floor: 1, temperature: 28.0, co2: 1200, status: "Alert" },
    { id: 4, name: "Ruang Rapat 3.1", floor: 3, temperature: 23.5, co2: 550, status: "Normal" }
  ],
  energyTrend: [
    { hour: "00:00", kwh: 20 },
    { hour: "04:00", kwh: 18 },
    { hour: "08:00", kwh: 35 },
    { hour: "12:00", kwh: 45 },
    { hour: "16:00", kwh: 38 },
    { hour: "20:00", kwh: 25 },
    { hour: "23:00", kwh: 22 }
  ]
};
