import {createContext, useContext, useEffect, useState} from "react";

const RenderModeContext = createContext();

export function RenderModeProvider({ children }) {
    const [perfModeEnabled, setPerfModeEnabled] = useState(() => {
        const saved = localStorage.getItem("perfModeEnabled");
        return saved ? JSON.parse(saved) : false;
    });

    useEffect(() => {
        localStorage.setItem("perfModeEnabled", JSON.stringify(perfModeEnabled));
    }, [perfModeEnabled]);

    const setPerfMode = (value) =>
    {
        setPerfModeEnabled(value);
    }

    return (
        <RenderModeContext.Provider value={{ perfModeEnabled, setPerfMode }}>
            {children}
        </RenderModeContext.Provider>
    )
}

export function useRenderMode()
{
    return useContext(RenderModeContext);
}