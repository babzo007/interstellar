import axiosApi from "./api";

export async function getAllAstronauts() {
  try {
    const response = await axiosApi.get("/astronauts");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function createAstronaut(data) {
  try {
    const response = await axiosApi.post("/astronauts", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function editAstronaut(data) {
  try {
    const { id } = data;
    const response = await axiosApi.put(`/astronauts/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
