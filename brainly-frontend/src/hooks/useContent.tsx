import axios from "axios"
import { useEffect, useState } from "react"
import { backend_url } from "../config"


export const useContent=()=>{
    const [contents, setContents] = useState([])

    function refresh(){
        axios
          .get(`${backend_url}/content`, {
            headers: {
              token: localStorage.getItem("token"),
            },
          })
          .then((response) => {
            setContents(response.data.message);
          });
    }

    useEffect(()=>{
        refresh();
        let interval= setInterval(()=>{
            refresh()
        },10*1000)
        return ()=>{
            clearInterval(interval)
        }
    },[])
    
    return {contents, refresh}
}