import { FaClipboardList } from "react-icons/fa"; 

export default function SideBar() {
  return (
    <aside className="h-full w-52 bg-gray-900 text-white overflow-y-auto flex flex-col items-center p-4">
      <div className="flex flex-col items-center gap-2">
        <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Foto</span>
        </div>
        <h2 className="text-lg font-semibold mt-2">Mitra Med</h2>
      </div>

      {/* Links */}
      <nav className="mt-8 w-full">
        <ul className="flex flex-col gap-4">
          <li>
            <a
              href="/turnos"
              className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-md transition"
            >
              <FaClipboardList className="text-lg" />
              <span>Turnos</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <footer className="mt-auto text-gray-500 text-sm">
        <p>© 2025 Nova Software</p>
      </footer>
    </aside>
  );
}
