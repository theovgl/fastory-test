import { useEffect, useState } from "react";
import { searchAPI } from "../services/searchService";
import { SWAPIResponse } from "../types/response";

export const useSearch = (query: string) => {
  const [results, setResults] = useState<SWAPIResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const debounce = setTimeout(async () => {
      if (query.trim()) {
        setLoading(true);
        try {
          const data = await searchAPI(query);
          setResults(data);
          setError(null);
        } catch (error) {
          setError(error as Error);
        } finally {
          setLoading(false);
        }
      }
    }, 500);

    return () => clearTimeout(debounce);
  }, [query]);

  return { results, loading, error };
};
