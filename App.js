import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from './assets/colors';
import SignUpForm from './components/sign-up-form';
const App = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.title}>
                UserDeets
            </Text>
            <View style={styles.signUpContainer}>
                <SignUpForm/>
            </View>
        </View>
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
        flex: 1,
    },
  signUpContainer: {
        flex: 0.7,
        alignItems: 'center',
      justifyContent: 'center',
  },
});

export default App;


