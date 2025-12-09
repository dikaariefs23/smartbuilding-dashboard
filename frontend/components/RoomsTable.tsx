"use client";
import { useState } from "react";
import { buildingData } from "@/lib/data";

export default function RoomsTable() {
  const [selectedFloor, setSelectedFloor] = useState<string>("all");
  const floors = ["all", 1, 2, 3];

  const filteredRooms =
    selectedFloor === "all"
      ? buildingData.rooms
      : buildingData.rooms.filter(
          (room) => room.floor === Number(selectedFloor)
        );

  const getStatusColor = (status: string) => {
    if (status === "Normal") return "bg-green-100 text-green-800";
    if (status === "Warning") return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Daftar Ruangan</h3>
        <select
          value={selectedFloor}
          onChange={(e) => setSelectedFloor(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm"
        >
          {floors.map((floor) => (
            <option key={floor} value={floor}>
              {floor === "all" ? "Semua Lantai" : `Lantai ${floor}`}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">
                Nama Ruang
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">
                Lantai
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">
                Suhu
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">
                CO2
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRooms.map((room) => (
              <tr key={room.id}>
                <td className="px-4 py-2 whitespace-nowrap font-medium text-gray-900">
                  {room.name}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-600">
                  {room.floor}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-600">
                  {room.temperature}°C
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-600">
                  {room.co2} ppm
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      room.status
                    )}`}
                  >
                    {room.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
