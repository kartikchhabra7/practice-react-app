import { useEffect, useState } from "react";

const useFetchData = () => {
  const [storeApiData, setStoreApiData] = useState([]);
  const [hasLoading, setHasLoading] = useState(true);
  const [isError, setIsError] = useState("");
  async function getApiData() {
    try {
      const API_BASE_URL = "https://picsum.photos/v2/list?page=2&limit=26";
      const response = await fetch(API_BASE_URL);
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setStoreApiData(result);
      } else {
        throw new Error("check your apiend points");
      }
    } catch (error) {
      console.log(error);
      setIsError(error.stack);
    } finally {
      setTimeout(() => {
        setHasLoading(false);
      }, 50);
    }
  }

  useEffect(() => {
    getApiData();
  }, []);

  return { storeApiData, hasLoading, isError };
};

export default useFetchData;
