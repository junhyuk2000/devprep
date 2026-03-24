import { Outlet } from "react-router-dom";
import Header from "../layout/Header"

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />

      <main className="h-[calc(100vh-64px)]">
        <Outlet />
      </main>
    </div>
  );
}