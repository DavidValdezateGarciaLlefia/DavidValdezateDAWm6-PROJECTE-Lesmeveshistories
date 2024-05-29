import React, { createContext, useState, useEffect } from 'react';
import historiasData from '../bd/bd.json'; 

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
    const [historias, setHistorias] = useState([]);

    useEffect(() => {
        setHistorias(historiasData.historias); 
    }, []);

    return (
        <GlobalContext.Provider value={{ historias, setHistorias }}>
            {children}
        </GlobalContext.Provider>
    );
}