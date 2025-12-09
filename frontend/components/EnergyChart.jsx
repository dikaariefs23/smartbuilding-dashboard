"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { buildingData } from "@/lib/data";

export default function EnergyChart() {
  return (
    <div className="bg-white rounded-lg shadow p-6 border border-slate-100">
      <h3 className="text-xl font-semibold mb-4 text-slate-900">
        Tren Konsumsi Energi 24 Jam
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={buildingData.energyTrend}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="kwh" stroke="#3B82F6" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
