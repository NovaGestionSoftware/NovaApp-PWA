import { useQuery } from "@tanstack/react-query";
import { obtenerDoctores } from "../../services/TurnosService";

export default function DoctoresGrid() {
  const { data: dataDoctores } = useQuery({
    queryKey: ["doctores"],
    queryFn: obtenerDoctores,
  });

  return (
    <div className="overflow-y-auto h-96 border border-gray-300 rounded">
      <table className="min-w-full text-sm border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-1 text-left">ID</th>
            <th className="border border-gray-300 py-1 text-center min-w-60">Profesional</th>
            <th className="border border-gray-300 py-1 text-center min-w-44">Especialidad</th>
          </tr>
        </thead>
        <tbody>
          {dataDoctores && dataDoctores.length > 0 ? (
            dataDoctores.map((doctor: any) => (
              <tr
                key={doctor.iddoctor}
                className="hover:bg-blue-100 hover:cursor-pointer transition"
              >
                <td className="text-end border border-gray-300 px-4 py-1">{doctor.iddoctor}</td>
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
  );
}
