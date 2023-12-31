"use client"
import LoginPage from './components/adminlogin';
import { useContext, useState } from 'react';
import AppContext from './components/AppContext';

export default function Dashboard(){
    const [userName, setUserName] = useState("default");
    return(
        <>  
            <AppContext.Provider value={{userName, setUserName}}>
                <LoginPage/>
            </AppContext.Provider>
        </>
    )
};