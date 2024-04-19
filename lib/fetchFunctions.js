import axios from 'axios';

const apiKey='cD5pRxKvWop7AMSfR1DdDGYClAVfwotRzZcRJyp7UtLk8hZt9nuJcSONlDruLQULzIPbU3QGE_LFEgobA50dsHzakMpi3OpDsml3HbtGWplAPE78mBQ_pSeK_tIhZnYx';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
    }
};
  
export async function getRandomRestaurants() { 
    try {
        const response = await fetch(`https://api.yelp.com/v3/businesses/search?location=Lubbock&sort_by=best_match&limit=1`, options);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data.businesses; 
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}