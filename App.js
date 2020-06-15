import React, {useState, useContext} from 'react';
import Home from './screens/home';
import {UserContext, UserProvider} from './contexts/userContext';
import {NativeRouter as Router, Route, Switch} from 'react-router-native';
import Profile from './screens/profile';
import Login from './screens/login';

const App = () => {
    // const [user, setUser] = useContext(UserContext)
    return (
        <UserProvider>
            <Router>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/profile'} component={Profile}/>
            </Router>
        </UserProvider>
    );
};

export default App;
