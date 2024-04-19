import { useState, useEffect } from "react";
import { Alert } from "react-native";
import axios from "axios";

const useFetch = (fn) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fn;
      console.log(response)
      setData(response);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data: ', error);
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return { data, loading, refetch };
};

export default useFetch;