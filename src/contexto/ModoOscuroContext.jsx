import { useState } from "react";
import { createContext } from "react";

const ThemeContext=createContext()

const temaInciail="light"

const ThemeProvider=({children})=>{

const [theme, settheme] = useState(temaInciail)
 document.body.setAttribute("data-bs-theme",theme)
const handleTheme=()=>{
   
    (theme==="light")? settheme("dark") : settheme(temaInciail)
    document.body.setAttribute("data-bs-theme",theme)
    localStorage.setItem("modo",theme)  
}
function cargarLocalStrorage(){
    if (localStorage.getItem("modo")===null) {
        localStorage.setItem("modo","light")  
        document.body.setAttribute("data-bs-theme",theme)
    }else if(localStorage.getItem("modo")==="dark"){
        localStorage.setItem("modo","dark")  
        document.body.setAttribute("data-bs-theme","dark")
    }
}


const data={theme,handleTheme,cargarLocalStrorage}

return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>

}
export{ThemeProvider}
export default ThemeContext