import { useState, useEffect } from "react";
import { Alert } from "react-native";
import * as Location from 'expo-location'

const apiKey='cD5pRxKvWop7AMSfR1DdDGYClAVfwotRzZcRJyp7UtLk8hZt9nuJcSONlDruLQULzIPbU3QGE_LFEgobA50dsHzakMpi3OpDsml3HbtGWplAPE78mBQ_pSeK_tIhZnYx';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
    }
};

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.yelp.com/v3/businesses/search?location="lubbock"&limit=1`, options);

      setData(await response.json())
      return data; 
    } catch (error) {
      console.error('Error fetching data: ', error);
      return [];
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

