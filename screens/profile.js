import React from 'react';
import {View, StyleSheet, ScrollView, Text, Button} from 'react-native';
import colors from '../assets/colors';
import Header from '../components/header';
import {UserContext, getCurrentUser} from '../contexts/userContext';
import AsyncStorage from '@react-native-community/async-storage';
import LogInForm from '../components/log-in-form';
const Profile = (props) => {
    const [user, setUser] = React.useContext(UserContext);
    return (
        <View>
            <Text>{`Welcome, ${user.fullName}.`}</Text>
            <Text>{`Your email is ${user.email}`}</Text>
            <Button title={'Sign out'} buttonStyle={styles.signOut} onPress={()=> setUser(null)}/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default Profile;


