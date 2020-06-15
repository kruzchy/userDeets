import React, {useState, useContext} from 'react';
import Home from './screens/home';
import {UserContext, UserProvider} from './contexts/userContext';

const App = () => {
    // const [user, setUser] = useContext(UserContext)
    return (
        <UserProvider>
            <Home/>
        </UserProvider>
    );
};

export default App;
