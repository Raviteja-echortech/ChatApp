import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import auth from "@react-native-firebase/auth"


const Login = () => {
    const [registration, setRegistration] = useState({ email: "", password: "" });

    const handleSignUp = async () => {
        try {
            const emailandPassword = await auth().createUserWithEmailAndPassword(registration.email, registration.password);
            console.log(emailandPassword?.user?.uid, "emailId")
            setRegistration({ email: "", password: "" })
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                Alert.alert("Error", "That email address is already in use!");
            } else if (error.code === 'auth/invalid-email') {
                Alert.alert("Error", "That email address is invalid!");
            } else {
                Alert.alert("Error", error.message);
            }
            console.log("Error", error.message)
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ width: "80%", alignSelf: "center" }}>
                <TextInput
                    placeholder="Enter Email"
                    style={styles.inputBox}
                    onChangeText={(txt) => setRegistration({ ...registration, email: txt })}
                    value={registration.email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder="Enter Password"
                    style={styles.inputBox}
                    onChangeText={(txt) => setRegistration({ ...registration, password: txt })}
                    value={registration.password}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.loginBtn} onPress={handleSignUp}>
                    <Text style={{ textAlign: "center" }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
    },
    loginBtn: {
        justifyContent: "center",
        backgroundColor: "red",
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
    },
    inputBox: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
    },
});
