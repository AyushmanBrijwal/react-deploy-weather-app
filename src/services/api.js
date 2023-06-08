import axios from 'axios';

const API_KEY = '38e1595d4958c4d58334e7ec17897493';
const API_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const getWeather = async (city, country) => {
    try{
       let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric` );
       return response.data;
    } catch (error) {
        console.log('Error while calling the api', error.message);
        return error.response;
    }
}