import { useState, useEffect } from "react"
import axios from "axios"
import * as Location from "expo-location"

const apiKey='bcA1BCMmWCFn5iBlMGmviCdV83W4Jc7JatXF7xhWnpWh5tgkhc9e0ws8e704sRs2O4uvdO7AzJaG8OvEiuphfzYUasHgJm8orQ7BIPLIrjY5QN7Mmv9HhKndntIiZnYx';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const options = {
    method: 'GET',
    url: 'https://api.yelp.com/v3/businesses/search',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
    },
    params: {
      term: 'food',
      location: 'lubbock',
      limit: 1,
      offset: Math.floor(Math.random() * 400)
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.businesses[0]);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      fetchData();
    })();
  }, []);

  const refetch = () => {
    setLoading(true);
    options.params.offset = Math.floor(Math.random() * 400);
    fetchData();
  };

  return { data, loading, error, refetch };
};

export default useFetch;

