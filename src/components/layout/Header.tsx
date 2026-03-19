import logo from "../../assets/images/logo.svg";

export default function AppLayout() {
  return (
    <header className="h-16 bg-gray-900 border-b border-gray-800 px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={logo} alt="DevPrep logo" className="h-10 w-auto" />
      </div>
    </header>
  );
}