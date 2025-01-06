import { useForm } from "react-hook-form";
import LoginForm from "../../Components/features/forms/LoginForm";
export default function Portal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      empresa: "",
      usuario: "",
      password: "",
    },
  });

  return (
    <main className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-300 to-blue-800">
      <form
        className="flex flex-col justify-center items-center h-[35rem] w-[25rem] py-6 px-2 border border-blue-500 bg-white rounded-2xl shadow-xl backdrop-blur-md space-y-6"
        onSubmit={() => {}}
        noValidate
      >
        <div className="w-28 h-16 ">
          <img src="/novaLogo.png" alt="Nova Logo" width={300} height={150} />
        </div>
        <p className="text-sm font-medium">Ingresa tus credenciales debajo</p>

        <LoginForm register={register} />

        <input
          type="submit"
          className={`mt-6 tracking-wider transition-all block py-3 px-4 w-3/4 text-white font-bold rounded cursor-pointer hover:from-emerald-700 hover:to-blue-500 focus:bg-blue-900 transform hover:-translate-y-1 hover:shadow-lg 
            ${
              status === "pending"
                ? "bg-gradient-to-r from-emerald-600 to-emerald-900"
                : "bg-gradient-to-r from-blue-600 to-emerald-400"
            }`}
          value={
            status === "pending"
              ? "Ingresando..."
              : status === "success"
              ? "Bienvenido!"
              : "Ingresar"
          }
        />
      </form>
    </main>
  );
}
