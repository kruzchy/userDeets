import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from './assets/colors';
import SignUpForm from './components/sign-up-form';
const App = () => {
    return (
        <View style={styles.container}>
            <SignUpForm/>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;


