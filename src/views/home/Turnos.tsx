import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { addDays } from "date-fns";
import { GrEdit } from "react-icons/gr";
import { ImCloudDownload } from "react-icons/im";
import { obtenerDoctores, obtenerTurnos } from "../../services/TurnosService";
import FacturacionModal from "../../Components/features/modals/FacturacionModal";
import AltaTurnoModal from "../../Components/features/modals/AltaTurnoModal";

const data = [
  { id: 1, horaIni: "16:00", horaFin: "16:19", estado: "", paciente: "ALVAREZ, Tomas", obs: "" },
  { id: 2, horaIni: "16:20", horaFin: "16:39", estado: "", paciente: "", obs: "" },
  { id: 3, horaIni: "16:40", horaFin: "16:59", estado: "", paciente: "", obs: "" },
  { id: 4, horaIni: "17:00", horaFin: "17:19", estado: "", paciente: "", obs: "" },
  { id: 5, horaIni: "17:20", horaFin: "17:39", estado: "", paciente: "", obs: "" },
  { id: 6, horaIni: "17:40", horaFin: "17:59", estado: "", paciente: "", obs: "" },
  { id: 7, horaIni: "18:00", horaFin: "18:19", estado: "", paciente: "", obs: "" },
  { id: 8, horaIni: "18:20", horaFin: "18:39", estado: "", paciente: "", obs: "" },
  { id: 9, horaIni: "18:40", horaFin: "18:59", estado: "", paciente: "", obs: "" },
  { id: 10, horaIni: "19:00", horaFin: "19:19", estado: "", paciente: "", obs: "" },
  { id: 11, horaIni: "19:20", horaFin: "19:39", estado: "", paciente: "", obs: "" },
  { id: 12, horaIni: "19:40", horaFin: "19:59", estado: "", paciente: "", obs: "" },
  { id: 13, horaIni: "20:00", horaFin: "20:19", estado: "", paciente: "", obs: "" },
];

export default function Turnos() {
  const navigate = useNavigate();
  const convertirFecha = (fecha: Date) => {
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, "0");
    const day = String(fecha.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [doctorSelected, setDoctorSelected] = useState<number | null>(null);
  const [mostrarModalPresentacion, setMostrarModalPresentacion] = useState(false);
  const fechaFormateada = convertirFecha(selectedDate);
  const locale = "es-ES";

  console.log("Iddoctor: ", doctorSelected, " ", "Fecha: ", fechaFormateada);

  const { data: dataDoctores } = useQuery({
    queryKey: ["doctores"],
    queryFn: obtenerDoctores,
    enabled: true,
    initialData: [],
  });

  const { data: dataTurnos } = useQuery({
    queryKey: ["turnos"],
    queryFn: () => obtenerTurnos({ doctorSelected, fechaFormateada }),
    enabled: doctorSelected !== null && fechaFormateada !== "",
  });

  console.log(dataTurnos);

  const handleDateChange = (days: any) => {
    setSelectedDate(addDays(selectedDate, days));
  };

  const handleRowClick = (iddoctor: number) => {
    setDoctorSelected(iddoctor === doctorSelected ? null : iddoctor);
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
            <div className="overflow-y-auto h-96 border border-gray-300 rounded">
              <table className="min-w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-1 text-left">ID</th>
                    <th className="border border-gray-300 py-1 text-center min-w-64">
                      Profesional
                    </th>
                    <th className="border border-gray-300 py-1 text-center min-w-44">
                      Especialidad
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataDoctores && dataDoctores.length > 0 ? (
                    dataDoctores.map((doctor: any) => (
                      <tr
                        key={doctor.iddoctor}
                        className={`transition hover:bg-blue-100 hover:cursor-pointer ${
                          doctorSelected === doctor.iddoctor ? "bg-blue-100 font-semibold" : ""
                        }`}
                        onClick={() => handleRowClick(doctor.iddoctor)}
                      >
                        <td className="text-end border border-gray-300 px-4 py-1">
                          {doctor.iddoctor}
                        </td>
                        <td className="border border-gray-300 px-4 py-1">{doctor.ndoctor}</td>
                        <td className="border border-gray-300 px-4 py-1">{doctor.nespecialidad}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="text-center py-2">
                        Cargando doctores...
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center w-full ml-10 my-4 gap-4">
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
            <div className="overflow-y-auto h-96 border border-gray-300 rounded">
              <table className="min-w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-1 text-left">ID</th>
                    <th className="border border-gray-300 py-1 text-center">Hora Ini</th>
                    <th className="border border-gray-300 py-1 text-center">Hora Fin</th>
                    <th className="border border-gray-300 py-1 text-center min-w-44">Estado</th>
                    <th className="border border-gray-300 py-1 text-center min-w-44">Paciente</th>
                    <th className="border border-gray-300 py-1 text-center min-w-44">Obs</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id} className="hover:bg-blue-100 hover:cursor-pointer transition">
                      <td className="text-end border border-gray-300 px-4 py-1">{item.id}</td>
                      <td className="border border-gray-300 px-4 py-1">{item.horaIni}</td>
                      <td className="border border-gray-300 px-4 py-1">{item.horaFin}</td>
                      <td className="border border-gray-300 px-4 py-1">{item.estado}</td>
                      <td className="border border-gray-300 px-4 py-1">{item.paciente}</td>
                      <td className="border border-gray-300 px-4 py-1">{item.obs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
