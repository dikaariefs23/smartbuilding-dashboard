"use client";

import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function BuildingBox() {
  return (
    <mesh>
      <boxGeometry args={[4, 8, 4]} />
      <meshStandardMaterial color="#3B82F6" />
    </mesh>
  );
}

export default function MapPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl w-full mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Urbansolv Smart Building - 3D View
          </h1>
          <p className="text-slate-600">
            Tampilan 3D sederhana gedung sebagai fitur opsional map.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 rounded-md bg-slate-200 text-slate-800 text-sm font-medium hover:bg-slate-300 transition"
          >
            ← Kembali ke Dashboard
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow w-full max-w-4xl h-[480px]">
        <Canvas camera={{ position: [10, 10, 10], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 15, 5]} intensity={0.9} />
          <BuildingBox />
          <OrbitControls enablePan enableZoom enableRotate />
        </Canvas>
      </div>
    </div>
  );
}
