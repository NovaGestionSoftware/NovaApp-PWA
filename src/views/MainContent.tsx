import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { addDays } from "date-fns";
import { GrEdit } from "react-icons/gr";
import { ImCloudDownload } from "react-icons/im";
import DoctoresGrid from "../Components/features/DoctoresGrid";
import TurnosHorariosGrid from "../Components/features/TurnosHorariosGrid";
import AltaTurnoModal from "../Components/features/modals/AltaTurnoModal";
import FacturacionModal from "../Components/features/modals/FacturacionModal";

export default function MainContent() {
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [mostrarModalPresentacion, setMostrarModalPresentacion] = useState(false);

  const locale = "es-ES";

  const handleDateChange = (days: any) => {
    setSelectedDate(addDays(selectedDate, days));
  };

  const handlePresentacion = () => {
    setMostrarModalPresentacion(true);
  };

  const handleCancelarPresentacion = () => {
    setMostrarModalPresentacion(false);
  };

  return (
    <div className="flex flex-col w-full mt-5">
      <div className="flex w-full h-16 items-center justify-between px-4">
        <div className=""></div>

        <div className="flex gap-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            🔄 Sincronizar
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            📊 Abrir Excel
          </button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
            🖨 Imprimir
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            ❌ Salir
          </button>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-start justify-center max-w-md mx-2 my-4 gap-4">
          <div className="flex items-center ml-4 text-sm gap-2">
            <button
              onClick={() => handleDateChange(-1)}
              className="px-2 py-0.5 bg-blue-500 text-white rounded"
            >
              -
            </button>
            <input
              type="date"
              value={format(selectedDate, "yyyy-MM-dd")}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
              className="pl-6 py-1 text-base font-bold text-emerald-600 border-2 border-gray-400 rounded"
            />
            <button
              onClick={() => handleDateChange(1)}
              className="px-2 py-0.5 bg-blue-500 text-white rounded"
            >
              +
            </button>
            <button
              onClick={() => setSelectedDate(new Date())}
              className="px-2 py-0.5 bg-blue-500 rounded text-white"
            >
              Hoy
            </button>
            <div className="py-1 w-20 ml-5 text-base text-emerald-600">
              {selectedDate
                .toLocaleDateString(locale, { weekday: "long" })
                .replace(/^./, (str) => str.toUpperCase())}
            </div>
          </div>

          <div className="p-1 mt-2">
            <DoctoresGrid />
          </div>
        </div>

        <div className="flex flex-col items-start justify-center w-full mx-2 my-4 gap-4">
          <div className="flex items-center text-sm w-full">
            <div className="flex gap-1 mr-20">
              <button
                onClick={() => navigate(`${location.pathname}?altaTurno=true`)}
                className="px-3 py-2 border font-medium text-gray-600  bg-gray-200 hover:bg-gray-300 rounded transition"
              >
                Alta Turno
              </button>
              <button
                onClick={handlePresentacion}
                className="px-3 py-2 border font-medium text-gray-600  bg-gray-200 hover:bg-gray-300 rounded transition"
              >
                Presentación
              </button>
              <button
                onClick={() => navigate(`${location.pathname}?facturacion=true`)}
                className="px-3 py-2 border font-medium text-gray-600  bg-gray-200 hover:bg-gray-300 rounded transition"
              >
                Facturación
              </button>
            </div>

            <div className="flex gap-1">
              <button
                onClick={() => {}}
                className="px-3 py-2 border font-medium text-gray-600  bg-gray-200 hover:bg-gray-300 rounded transition"
              >
                Anular
              </button>
              <button
                onClick={() => {}}
                className="px-3 py-2 border font-medium text-gray-600  bg-gray-200 hover:bg-gray-300 rounded transition"
              >
                Datos
              </button>

              <div className="flex items-center ml-20 px-3 py-2 border text-xl font-medium text-gray-600  bg-gray-200 hover:bg-gray-300 rounded transition cursor-pointer">
                <GrEdit />
              </div>

              <div className="flex items-center px-3 py-2 border text-2xl font-medium text-gray-600  bg-gray-200 hover:bg-gray-300 rounded transition cursor-pointer">
                <ImCloudDownload />
              </div>
            </div>
          </div>

          <div className="p-1">
            <TurnosHorariosGrid />
          </div>
        </div>
      </div>

      {mostrarModalPresentacion && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl mb-4 text-center">¿Confirmar presencia del paciente?</h3>
            <div className="flex justify-around mt-14">
              <button
                onClick={() => {
                  // Aquí puedes agregar la lógica para la confirmación de la presentación
                  setMostrarModalPresentacion(false);
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
              >
                Confirmar
              </button>
              <button
                onClick={handleCancelarPresentacion}
                className="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition duration-200"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      <AltaTurnoModal />
      <FacturacionModal />
    </div>
  );
}
