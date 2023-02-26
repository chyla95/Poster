import { useEffect, useState } from "react";

const useService = (service) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await service();
      setData(response);

      setIsLoading(false);
    };
    fetchData();
  }, [service]);

  return { data, isLoading };
};

export default useService;
