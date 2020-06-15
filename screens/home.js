import React from 'react';
import {View, StyleSheet, ScrollView, Text, Button} from 'react-native';
import colors from '../assets/colors';
import SignUpForm from '../components/sign-up-form';
import Header from '../components/header';
import {UserContext} from '../contexts/userContext';
import AsyncStorage from '@react-native-community/async-storage';
const Home = (props) => {
    const removeUserData = async () => {
        try {
            await AsyncStorage.removeItem('userData');
            setUser(null);
            console.log('data removed');

        } catch (e) {
            console.log(e);
        }
    };
    const [user, setUser] = React.useContext(UserContext);
    return (
        <ScrollView >
            <Header/>
            <View style={styles.main}>
                {!user ?
                    <View style={styles.signUpContainer}>
                        <SignUpForm navigation={props.navigation}/>
                    </View>
                :
                    <View>
                        <Text>{`Welcome, ${user.fullName}.`}</Text>
                        <Text>{`Your email is ${user.email}`}</Text>
                        <Button title={'Sign out'} buttonStyle={styles.signOut} onPress={removeUserData}/>
                    </View>
                }
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        color: colors.blue700,
        flex: 0.2,
    },
    main: {
        alignItems: 'center',
        padding: 15,
    },
    signUpContainer: {
        marginTop: 40,
    },
    signOut: {
        marginTop: 20,
    },
});

export default Home;


