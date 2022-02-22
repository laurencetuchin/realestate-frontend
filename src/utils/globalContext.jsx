import { createContext, useContext } from "react"

//context object
export const Context = createContext()

//a custom hook that wraps useContext object
export const useGlobalState = () => useContext(Context)