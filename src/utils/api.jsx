import axios from "axios"


const BASE_URL="https://www.googleapis.com/youtube/v3"
const API_KEY = 'AIzaSyCW6sZ0RB6mPVVhcmYoz0N7PC1z8bZBwww';

const fetchApiForYoutubeData = async(enpoints,params ={}) =>{
     try {
        const response = await axios.get(`${BASE_URL}/${enpoints}`,{
            params:{
                ...params,
                key: API_KEY,
            }
        })
        return response.data;
     } catch (error) {
        console.error(error,'error fetching youtube data')
     }
}


export default fetchApiForYoutubeData


// const fetchDataFromApi = async (url)=>{
//    try{
//      const response = await axios.get(`${BASE_URL}/${url}`, options)
//      console.log(url)
//     return response.data
//     }catch(e){
//         console.error('Error in fetchDataFromApi:', e)
//     }
// }

