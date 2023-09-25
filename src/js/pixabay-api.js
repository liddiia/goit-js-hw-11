import axios from 'axios';


const BASE_URL = "https://pixabay.com/api/";
const KEY = "39646115-939d05d3332b2253cce455354";


export async function fetchPhoto(q, page, perPage) {
    const url = `${BASE_URL}?key=${KEY}&q=${q}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal&safesearch=true`;
    const response = await axios.get(url);
    return response.data;          
};
