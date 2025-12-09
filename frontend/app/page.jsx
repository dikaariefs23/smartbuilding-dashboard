import Link from "next/link";
import KPICards from "@/components/KPICards";
import RoomsTable from "@/components/RoomsTable";
import EnergyChart from "@/components/EnergyChart";
import { buildingData } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-12">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Urbansolv Smart Building Dashboard
            </h1>
            <p className="text-lg text-slate-600">
              {buildingData.name}
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Link
              href="/map"
              className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium shadow hover:bg-blue-700 transition"
            >
              Lihat 3D Map
            </Link>
          </div>
        </header>

        <main className="space-y-8">
          <KPICards />
          <RoomsTable />
          <EnergyChart />
        </main>
      </div>
    </div>
  );
}
