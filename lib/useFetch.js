import { useState, useEffect } from "react"
import axios from "axios"
import * as Location from "expo-location"

const apiKey='cD5pRxKvWop7AMSfR1DdDGYClAVfwotRzZcRJyp7UtLk8hZt9nuJcSONlDruLQULzIPbU3QGE_LFEgobA50dsHzakMpi3OpDsml3HbtGWplAPE78mBQ_pSeK_tIhZnYx';

const useFetch = () => {
  const [data, setData] = useState([]);
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
      // latitude: latitude,
      // longitude: longitude,
      limit: 1,
      offset: Math.floor(Math.random() * 400)
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.businesses);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  // useEffect(() => {
  //   (async () => {
  //     let _location = await Location.getCurrentPositionAsync({});
  //     setLatitude(_location.coords.latitude);
  //     setLongitude(_location.coords.longitude);
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      fetchData();
    })();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return { data, loading, error, refetch };
};

export default useFetch;

