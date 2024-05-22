import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context  = createContext();

const ContentProvider = (proment) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");


    const onSent = async (proment) => {
        await run(input);
    }

    const ContextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return (
        <Context.Provider value={ContextValue} >
            {proment.children}
        </Context.Provider>
    )
}

export default ContentProvider;