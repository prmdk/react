import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function useApi(URL, defaultValue = []) {
  // would handle my loading, data setting and load error.
  const [data, setData] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(URL);
      setIsLoading(false);
      setData(res.data);
    } catch (e) {
      setIsLoading(false);
      setLoadError(e);
    }
  }, [URL]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // return {
  //   data: data,
  //   isLoading: isLoading,
  //   loadError: loadError
  // };

  return {
    data,
    isLoading,
    loadError
  };
}

/**
 * {data: data}
 */
