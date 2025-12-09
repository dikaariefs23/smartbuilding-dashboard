"use client";
import { buildingData } from "@/lib/data";

export default function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Energi Hari Ini</h3>
        <p className="text-3xl font-bold text-gray-900">
          {buildingData.summary.energyTodayKwh} kWh
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Rata-rata Suhu</h3>
        <p className="text-3xl font-bold text-blue-600">
          {buildingData.summary.avgTemperature}°C
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Rata-rata CO2</h3>
        <p className="text-3xl font-bold text-emerald-600">
          {buildingData.summary.avgCO2} ppm
        </p>
      </div>
    </div>
  );
}
