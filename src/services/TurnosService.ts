import { isAxiosError } from "axios";
import api from "../lib/axios";

export async function obtenerDoctores() {
  try {
    const { data } = await api("/obtiene_doctores");

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
      // console.log(error.response.data);
    } else {
      throw new Error("Hubo un error...");
    }
  }
}
