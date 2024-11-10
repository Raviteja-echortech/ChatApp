import React, { useState } from "react"
import auth from '@react-native-firebase/auth';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const Login = () => {
    const [registrtaion, setRegistration] = useState({ name: "", email: "" })


    const handlesingin = () => {
        auth()
            .createUserWithEmailAndPassword(registrtaion.email, registrtaion.name)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    return (
        <View style={Styles.container} >
            <View style={{ width: "80%", alignSelf: "center" }} >
                <TextInput
                    placeholder="Enter Email"
                    style={Styles.inputBox}
                    onChangeText={(txt) => setRegistration({ ...registrtaion, email: txt })}
                    value={registrtaion.email}
                />
                <TextInput
                    placeholder="Enter Name"
                    style={Styles.inputBox}
                    onChangeText={(txt) => setRegistration({ ...registrtaion, name: txt })}
                    value={registrtaion.name}
                />
                <TouchableOpacity style={Styles.loginBtn} onPress={handlesingin} >
                    <Text style={{ textAlign: "center" }} >Login In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Login


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    loginBtn: {
        justifyContent: "center",
        backgroundColor: "yellow",
        borderRadius: 10,
        padding: 10,
        marginTop: 20
    },
    inputBox: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 10,
        marginLeft: 20,
        marginTop: 20,
    }
})