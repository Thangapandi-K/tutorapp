import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const inLocal = localStorage.getItem("curriculam");

    const [curriculam, setCurriculam] = useState(JSON.parse(inLocal) || null);


    return (
        <DataContext.Provider value={{ curriculam, setCurriculam }}>
            { children }
        </DataContext.Provider>
    )
};