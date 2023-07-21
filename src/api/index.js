
import axios from 'axios';

  const URL =  'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng';


const options = {
  params: {
    bl_latitude: '12.91285',
    tr_longitude: '12.91285',
    bl_longitude: '100.87808',
    tr_latitude: '100.87808',

    limit: '30',
  },
  headers: {
    'X-RapidAPI-Key': '552d6e5fbemsh93d42e87b1c80c6p1a01afjsn0ccbbe35db4f',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlacesData = async () => {
    try{
        const {data: { data}} = await axios.get(URL, options);
        return data;

    }catch(error){

        console.log(error)

    }
}