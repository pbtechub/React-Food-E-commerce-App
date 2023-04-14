
import { createContext, useEffect, useState } from "react";
export const MenuContext = createContext();

export const MenuContextProvider = ({children}) => {

    const [category, setCategory] = useState('')
   
   

    const handleSelectedCat =  (selectedCat) => {
       
        setCategory(selectedCat)
    }

   
// console.log(category);
    useEffect(() => {

      }, [category])

  

    return (
        <MenuContext.Provider value={{category, setCategory, handleSelectedCat}}>
            {children}
        </MenuContext.Provider>
    )

}