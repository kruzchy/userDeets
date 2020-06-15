import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import colors from '../assets/colors';
import { useForm, Controller } from "react-hook-form";
const SignUpForm = () => {
    return (
        <View style={styles.formContainer}>
            <Text style={styles.titleText}>Don't have an account?</Text>
            <Text style={styles.subtitleText}>Signup by filling out your information.</Text>
            <View style={styles.formWrapper}>
                <View style={styles.fieldsContainer}>
                    <View style={styles.inputWrapper}>
                        <TextInput placeholder={'Full name'} style={styles.input}/>
                        <Icon name={'user'} color={colors.gray500} style={styles.icon}/>
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput placeholder={'Email'} style={styles.input}/>
                        <Icon name={'envelope'} color={colors.gray500} style={styles.icon}/>
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput placeholder={'Password'} style={styles.input} secureTextEntry={true}/>
                        <Icon name={'key'} color={colors.gray500} style={styles.icon}/>
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput placeholder={'Confirm password'} style={styles.input} secureTextEntry={true}/>
                        <Icon name={'key'} color={colors.gray500} style={styles.icon}/>
                    </View>
                </View>
                <Button onPress={() => Alert.alert('yes bro')} title={'SIGN UP'} style={styles.submitBtn}/>
            </View>
            <Text style={styles.loginHelpText}>Already have an account? <Text style={styles.loginText}>LOGIN</Text></Text>
        </View>
    );
};
const styles = StyleSheet.create({
    formContainer:{

    },
    formWrapper: {
        backgroundColor: colors.gray300,
        height:'auto',
        borderRadius: 10,
        overflow: 'hidden',
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitleText:{
        color: colors.gray700,
        marginBottom: 20,
    },
    fieldsContainer: {
        padding: 20,
    },
    inputWrapper: {
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        top: 8,
        left: 8,
        fontSize: 22,
    },
    input: {
        padding: 0,
        paddingHorizontal: 12,
        paddingVertical: 6,
        paddingLeft:36,
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: colors.gray400,
        width: 250,
    },
    submitBtn: {
        height: 20,
    },
    loginHelpText: {
        color: colors.gray700,
        marginTop: 20,
    },
    loginText: {
        color: colors.blue600,
        fontWeight: 'bold',
    },
});
export default SignUpForm;
