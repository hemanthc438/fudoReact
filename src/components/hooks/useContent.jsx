import { createContext } from "react"
const useContent = createContext({
    user:{
        name:"dummy",
        email:"dummy@gmail.com"
    }
})
export default useContent;