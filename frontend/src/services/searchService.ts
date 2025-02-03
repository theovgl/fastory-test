import { SWAPIResponse } from "../types/response";

export async function searchAPI(query: string) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/search?query=${query}`,
      {
        method: "GET",
      },
    );
    const data = (await response.json()) as SWAPIResponse[];

    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
}
