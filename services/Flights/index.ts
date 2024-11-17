import axiosInstance from "../../utils/axiosInstance";

export async function searchFlight(params: any) {
  const response = await axiosInstance.get("/flights/searchFlights", {
    params: params,
  });
  return response.data;
}
export async function searchFlightLocations() {
  const response = await axiosInstance.get("/flights/searchDestination", {
    params: { query: "new" },
  });
  return response.data;
}
export async function searchHotels(params: any) {
  const response = await axiosInstance.get("/hotels/searchHotels", {
    params: params,
  });
  return response.data;
}
export async function searchDestination() {
  const response = await axiosInstance.get("/hotels/searchHotels", {
    params: { query: "man" },
  });
  return response.data;
}
export async function searchAttractions(params: any) {
  const response = await axiosInstance.get("/attraction/searchAttractions", {
    params: params,
  });
  return response.data;
}
