import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

type apiErrorType = {
  code: string;
  message: string;
};

const useRemoteData = (url: string, config?: AxiosRequestConfig) => {
  const [data, setData] = useState<Object | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<object | null>(null);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const res = await axios.get(url, config);
        setData(res.data);
        setLoading(false);
        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setLoading(false);
          setError(error.toJSON());
        }
      }
    }
    fetchDataFromAPI();
  }, [data, config, url]);

  return { data, loading, error };
};

export default useRemoteData;
