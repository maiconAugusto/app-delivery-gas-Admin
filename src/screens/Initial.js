import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Icon from '../assets/Icon.png'

const Initial = ({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={Icon} style={{width: 100, height:100}}/>
                <Text style={styles.nameLogo}>speed gás</Text>
                <Text style={styles.nameType}>delivery</Text>
                <Text style={styles.adm}>ADMIN</Text>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity 
                style={styles.logger}
                onPress={()=> navigation.navigate('Login')}
                >
                    <Text style={styles.text_btn_login}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#0066ff',
    },
    logo:{
        flex: 4,
        justifyContent:'center',
        alignItems:'center'
    },
    nameLogo:{
        fontSize: 35,
        color: 'white',
        textTransform:'uppercase',
        fontWeight:'bold'
    },
    nameType:{
        color: 'white',
        fontSize: 18
    },
    btn:{
        flex: 3,
        justifyContent:'flex-end'
    },
    logger:{
        backgroundColor: '#0FDD7F',
        padding: 16
    },
    text_btn_login:{
        justifyContent:'center',
        textAlign : 'center',
        fontSize: 20,
        color: 'white',
        fontWeight:'bold'
    },
    adm:{
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 40,
        color: 'white',
    }
})
export default Initial