import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import colors from '../assets/colors';
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../contexts/userContext';
const SignUpForm = () => {
    const { control, handleSubmit, errors, watch } = useForm();
    const [user, setUser] = React.useContext(UserContext);
    const storeUserData = async (data) => {
        try {
            const jsonValue = JSON.stringify(data);
            await AsyncStorage.setItem('userData', jsonValue);
            console.log('data stored');

        } catch (e) {
            console.log(e);
        }
    };
    const onSubmit = async (data) => {
        await storeUserData(data);
        setUser(data);
    };
    return (
        <View style={styles.formContainer}>
            <Text style={styles.titleText}>Don't have an account?</Text>
            <Text style={styles.subtitleText}>Signup by filling out your information.</Text>
            <View style={styles.formWrapper}>
                <View style={styles.fieldsContainer}>
                    <View style={styles.inputWrapper}>
                        <Controller
                            control={control}
                            name={'fullName'}
                            rules={{required:'This field is required', maxLength: 120}}
                            onChange={args => args[0].nativeEvent.text}
                            defaultValue=""
                            as={<TextInput placeholder={'Full name'} style={styles.input}/>}
                        />
                        <Icon name={'user'} color={colors.gray500} style={styles.icon}/>
                    </View>
                    {errors.fullName && <Text style={styles.error}><Icon name={'warning'}/>{errors.fullName.message}</Text>}
                    <View style={styles.inputWrapper}>
                        <Controller
                            control={control}
                            name={'email'}
                            rules={{
                                required:'This field is required',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Not a valid email address',
                                }}}
                            onChange={args => args[0].nativeEvent.text}
                            defaultValue=""
                            as={<TextInput placeholder={'Email'} style={styles.input}/>}
                        />
                        <Icon name={'envelope'} color={colors.gray500} style={styles.icon}/>
                    </View>
                    {errors.email && <Text style={styles.error}><Icon name={'warning'}/>{errors.email.message}</Text>}
                    <View style={styles.inputWrapper}>
                        <Controller
                            control={control}
                            name={'password'}
                            rules={{
                                required:'This field is required',
                                minLength: {
                                    value: 8,
                                    message: "Password must have at least 8 characters"
                                }}}
                            onChange={args => args[0].nativeEvent.text}
                            defaultValue=""
                            as={<TextInput placeholder={'Password'} style={styles.input} secureTextEntry={true}/>}
                        />
                        <Icon name={'key'} color={colors.gray500} style={styles.icon}/>
                    </View>
                    {errors.password && <Text style={styles.error}><Icon name={'warning'}/>{errors.password.message}</Text>}
                    <View style={styles.inputWrapper}>
                        <Controller
                            control={control}
                            name={'confirmPassword'}
                            rules={{
                                required:'This field is required',
                                validate: value => value === watch('password') || 'The passwords do not match',
                            }}
                            onChange={args => args[0].nativeEvent.text}
                            defaultValue=""
                            as={<TextInput placeholder={'Confirm password'} style={styles.input} secureTextEntry={true}/>}
                        />
                        <Icon name={'key'} color={colors.gray500} style={styles.icon}/>
                    </View>
                    {errors.confirmPassword && <Text style={styles.error}><Icon name={'warning'}/>{errors.confirmPassword.message}</Text>}
                </View>
                <Button onPress={handleSubmit(onSubmit)} title={'SIGN UP'} style={styles.submitBtn}/>
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
        width: 300,
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
    error: {
        marginTop: -10,
        marginBottom: 10,
        color: colors.orange500,
        marginLeft: 10,
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
