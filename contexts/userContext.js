import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
export const UserContext = React.createContext();
export const UserProvider = (props) => {
    const [user, setUser] = React.useState(null);
    React.useEffect(() => {
        const getUserData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('userData');
                console.log('json get user data', jsonValue);
                let userObj = jsonValue != null ? JSON.parse(jsonValue) : null;
                setUser(userObj);
            } catch (e) {
                console.log(e);
            }
        };
        getUserData();
    }, []);
    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;
