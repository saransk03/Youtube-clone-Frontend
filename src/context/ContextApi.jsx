import React, {createContext,useEffect,useState} from "react";
import fetchApiForYoutubeData from "../utils/api";


export const Context = createContext();

const ContextApiProvider = ({children}) => {
    const [selectedCategory,setSelectedCategory]= useState('0')
    const [loading,setLoading]= useState(false);
    const [videoData,setVideoData]= useState([])
    const [mobileMenu,setMobileMenu]= useState(false);

    const fetchYoutubeData= async(params) =>{
        // console.log("Params --->",params)
    setLoading(true);
    try {
        const res= await fetchApiForYoutubeData('videos',params);
        console.log(res.items)
        setVideoData(res?.items)
    } catch (error) {
        console.error(error,'error fetching youtube results');
    }
    finally{
         setLoading(false)
    }
    }

    useEffect(() =>{
        if(selectedCategory){
            if(selectedCategory === '0'){
                fetchYoutubeData({
                    part:'snippet,contentDetails,statistics',
                    regionCode: 'IN',
                    maxResults:50,
                    chart:"mostPopular",
                })
            }
            else{
                fetchYoutubeData({
                    part:'snippet,contentDetails,statistics',
                    chart:"mostPopular",
                    regionCode: 'IN',
                    maxResults:20,
                    videoCategoryId:selectedCategory
                })
            }
        }
    },[selectedCategory])

    return (
        <Context.Provider
         value= {{
            selectedCategory,
            setSelectedCategory,
            setMobileMenu,
            mobileMenu,
            videoData,
            loading,
            setLoading
         }}
        >
    {children}
        </Context.Provider>
    )
}

export default ContextApiProvider




// import { createContext, useEffect, useState } from "react";
// import fetchDataFromApi from "../utils/api";


// export const ContextApi = createContext()

// const ContextApiProvider = ({ children }) => {

//     const [isLoading, setIsLoading] = useState(false)
//     const [searchResult, setSearchResult] = useState(false)
//     const [categories, setCategories] = useState("New")
//     const [mobileMenu, setMobileMenu] = useState(false)

//     useEffect(()=>{
//         fetchSelectedCategoryData(categories)
//     },[])
    
//     const fetchSelectedCategoryData = (query) =>{
//         // fetch data based on selected category
//         setIsLoading(true)
//         fetchDataFromApi(`search/?q=${query}`).then((res)=>{
//             setCategories(res)
//             setIsLoading(false)
//         })
      
//     }

//     return (
//         <ContextApi.Provider value={{
//             isLoading,
//             setIsLoading,
//             searchResult,
//             setSearchResult,
//             categories,
//             setCategories,
//             mobileMenu,
//             setMobileMenu,
//         }}>
//             {children}
//         </ContextApi.Provider>
//     )

// }

// export default ContextApiProvider