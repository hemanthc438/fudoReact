import { useState } from "react"

const useFilter = (text,restaurants) =>{
    const [filteredData,setFilteredData] = useState([])
        if(text==''){
            setFilteredData(restaurants)
        }
        else
        setFilteredData(restaurants?.filter((restaurant)=>restaurant?.info?.name?.toLowerCase().includes(text.toLowerCase())))
        return filteredData
}
export default useFilter;