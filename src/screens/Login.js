import React, { useState, useEffect} from 'react'
import {View ,
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    ActivityIndicator, 
    AsyncStorage,
    } 
    from 'react-native';
import firebase from 'firebase'

const Login = ({navigation})=>{
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ spinner, setSpinner ] = useState('')
    const [ loginError, setLoginError ] = useState("")
    const [ erroMessage, setErroMessage ] = useState('')

    async function handleLogin(){
        setSpinner(true)
        const response = await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(()=>{
                setSpinner(false)
                    AsyncStorage.setItem('Email',email)
                        navigation.navigate('Main')         
            })
            .catch((err)=>{
                if(err.code == 'auth/wrong-password') 
                    return setSpinner(false), setLoginError(true), setErroMessage('senha inválida')
                if(err.code == 'auth/user-not-found')
                    return setSpinner(false), setLoginError(true), setErroMessage('usuário não existente')
                if(err.code == 'auth/invalid-email')
                    return setSpinner(false), setLoginError(true), setErroMessage('senha ou e-mail inválidos')
                console.log(err)
                setSpinner(false)
            })
    }
    function Buttom(){
        if(spinner){
            return(
                <ActivityIndicator style={styles.spinners} size='large' color='white'/>
            )
        }
        return(
            <TouchableOpacity
            onPress={()=> handleLogin()}
            style={styles.button}>
            <Text style={styles.logger}>Entrar</Text>
            </TouchableOpacity>
        )
    }
    function handleError(){
        setTimeout(function(){
            setLoginError(false)
        },2000)
        return(
            <Text style={styles.error}>{erroMessage}</Text>
        )
    }
    return(
        <View style={styles.container}>
            { loginError == true ? handleError() : <></> }
            <TextInput
            style={styles.input}
            placeholder=" E-mail"
            placeholderTextColor="#323232"
            onChangeText={(text)=> setEmail(text)}
            />
            <TextInput
            style={styles.input}
            placeholder=" Senha"
            placeholderTextColor="#323232"
            secureTextEntry
            onChangeText={(text)=> setPassword(text)}
            />
            {Buttom()}
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor :'#0066ff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
    },
    input:{
        alignSelf: 'stretch',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor:'white',
        marginBottom: 12,
        borderRadius: 4,
        height: 48, 
    },
    button:{
        alignSelf: 'stretch',
        marginRight: 10,
        marginLeft: 10,
        backgroundColor:'#0FDD7F',
        marginTop: 40,
        height: 50,
        justifyContent: 'center',
        borderRadius: 4
    },
    logger:{
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight:'bold'
    },
    logo:{
        width: 90,
        height :140,
    },
    register:{
        marginTop: 25,
    },
    text_register:{
        color: 'white'
    },
    spinners:{
        marginTop: 40,
        height: 50,
    },
    error:{
        color: 'white',
        textAlign:'center',
        marginBottom: 6,
        textTransform:'uppercase',
        fontWeight:'bold'
    }
})
export default Login