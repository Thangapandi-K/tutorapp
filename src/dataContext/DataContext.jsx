import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [curriculam, setCurriculam] = useState();
    return (
        <DataContext.Provider value={{ curriculam, setCurriculam }}>
            { children }
        </DataContext.Provider>
    )
};