import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const UserContext = React.createContext();
export const UserProvider = (props) => {
    const [user, setUser] = React.useState(null);
    React.useEffect((user)=>{
        const storeCurrentUser = async () => {
            user && await AsyncStorage.setItem('currentUser', user);
        };
        storeCurrentUser();
    },[user]);
    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;
export const getUserData = async (email) => {
    try {
        const jsonValue = await AsyncStorage.getItem('usersData');
        let usersDataObj =  jsonValue != null ? JSON.parse(jsonValue) : null;
        return usersDataObj.find(user => user.email === email);
    } catch (e) {
        console.log(e);
    }
};

export const storeUserData = async (data) => {
    try {
        const oldUserData = await getUserData();
        const newUserData = oldUserData ? oldUserData.push(data) : [data];
        await AsyncStorage.setItem('usersData', JSON.stringify(newUserData));
        console.log('data stored');

    } catch (e) {
        console.log(e);
    }
};

export const getCurrentUser = async () => {
    return await AsyncStorage.getItem('currentUser');
};
