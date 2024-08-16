import { Routes, Route, useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';

import pages from "./pages";

function App(){
    const { pathname } = useLocation();

    const title = import.meta.env.VITE_TITLE;
    const [ subtitle, setSubtitle ] = useState("");
    const [ pageID, setpageID ] = useState("");

    useEffect(() => {
        const { "subtitle" : newSubtitle } = pages.find(p => p.path === pathname) || pages.find(p => p.path === "*");
        const { "id" : newID } = pages.find(p => p.path === pathname) || pages.find(p => p.path === "*");
        setSubtitle(newSubtitle);
        setpageID((newID == "home") ? "" : newID);

        document.title = title + ': ' + newSubtitle;
    }, [pathname]);

    return(
        <>
            <Routes>
                { pages.map(p => <Route key={p.id} path={p.path} element={<p.comp />}/>) }
            </Routes>
        </>
    );
}

/*
    So Sally can wait
    she knows it's too late
    as we're walking on by
    
    My Soul slides away
    but don't look back in anger, I heard you say
*/

export default App;