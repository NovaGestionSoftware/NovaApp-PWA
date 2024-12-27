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

export default function TurnosHorariosGrid() {
  return (
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
  );
}
