import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../assets/colors';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>UserDeets</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        color: colors.blue800,
    },
});

export default Header;
