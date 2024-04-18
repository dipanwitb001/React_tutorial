import {createContext, useContext} from 'react';


// in the previous example, we are not providing any pre-defined context, but here we are a context(i.e a theme is being provided which can be considered as default theme.), two methods are provided, darkTheme and lightTheme
 const ThemeContext= createContext({
    themeMode:"light",
    darkTheme :() => {},
    lightTheme:() => {},
})




 export const ThemeProvider = ThemeContext.Provider


// // same as the previous example, but in the former we have to import useContext as well as UserContext, but here we are wrapping in a method, hence only importing the below method will work
 export default function useTheme(){
     return useContext(ThemeContext)
 }

// // useContext hook makes use of the context which is created and stored in the ThemeContext object 