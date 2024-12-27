const data = [
  { id: 1, profesional: "Juan Pérez", especialidad: "Cardiólogo" },
  { id: 2, profesional: "Ana García", especialidad: "Dermatóloga" },
  { id: 3, profesional: "Luis Torres", especialidad: "Pediatra" },
  { id: 4, profesional: "María López", especialidad: "Oftalmóloga" },
  { id: 5, profesional: "Carlos Gómez", especialidad: "Traumatólogo" },
  { id: 6, profesional: "Laura Ruiz", especialidad: "Ginecóloga" },
  { id: 7, profesional: "Pedro Sánchez", especialidad: "Neurológico" },
  { id: 8, profesional: "Sofía Martínez", especialidad: "Endocrinóloga" },
  { id: 9, profesional: "Miguel Díaz", especialidad: "Cirujano" },
  { id: 10, profesional: "Patricia Fernández", especialidad: "Oncóloga" },
  { id: 11, profesional: "Luis Ramírez", especialidad: "Ginecólogo" },
  { id: 12, profesional: "José Herrera", especialidad: "Cardiólogo" },
  { id: 13, profesional: "Lucía González", especialidad: "Dermatóloga" },
  { id: 14, profesional: "Carlos Rodríguez", especialidad: "Pediatra" },
  { id: 15, profesional: "Ana López", especialidad: "Oftalmóloga" },
];

export default function DoctoresGrid() {

  return (
    <div className="overflow-y-auto h-96 border border-gray-300 rounded">
      <table className="min-w-full text-sm border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-1 text-left">ID</th>
            <th className="border border-gray-300 py-1 text-center min-w-44">Profesional</th>
            <th className="border border-gray-300 py-1 text-center min-w-44">Especialidad</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-blue-100 hover:cursor-pointer transition">
              <td className="text-end border border-gray-300 px-4 py-1">{item.id}</td>
              <td className="border border-gray-300 px-4 py-1">{item.profesional}</td>
              <td className="border border-gray-300 px-4 py-1">{item.especialidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
