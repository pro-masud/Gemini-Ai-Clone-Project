import { createContext } from "react";
import run from "../config/gemini";

export const Context  = createContext();

const ContentProvider = (proment) => {
    const onSent = async (proment) => {
        await run(proment);
    }

    onSent("what is react js?");
    const ContextValue = {

    }

    return (
        <Context.Provider value={ContextValue} >
            {proment.children}
        </Context.Provider>
    )
}

export default ContentProvider;