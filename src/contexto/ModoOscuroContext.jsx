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
}

const data={theme,handleTheme}

return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export{ThemeProvider}
export default ThemeContext