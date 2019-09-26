import React,{useState, useEffect} from 'react'
import { View, StyleSheet, FlatList, Text, BackHandler, TouchableOpacity, AsyncStorage} from 'react-native'
import { CirclesRotationScaleLoader } from 'react-native-indicator'
import firebase, { app } from "firebase"
import _ from 'lodash'
import { existsTypeAnnotation } from '@babel/types'

const Home = ({navigation})=>{
    const [ shoppings, setShoppings ] = useState([])
    const [ loading, setLoading ] = useState('')

    useEffect(()=>{
        setLoading(true)
            async function handleShopping(){
                const response = await firebase.database().ref('/Pedidos/')
                    .on('value',snapshot=>{
                        setShoppings(_.values(snapshot.val()))
                    })
            }
        handleShopping()
    },[])
    useEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress',function(){
            BackHandler.exitApp()
        })
    })
    function handleLogoff(){
        AsyncStorage.removeItem('Email')
            .then(()=>{
                navigation.navigate('Initial')
            })
    }
    function handlePedidos(item){
        if(item.delivered === false){
            return(
                <TouchableOpacity onPress={()=> 
                    navigation.navigate('ProfileClient',{ 
                        id: item.user, date: item.request_date, quantity: item.quantity
                    })}>
                    <View style={styles.historic}>
                        <Text style={styles.title}>Pedido</Text>
                        <View style={styles.navHeader}>
                            <Text style={styles.info}>Quantidade: {item.quantity}</Text>
                            <Text style={styles.info}>Valor: {item.price}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> handleLogoff()}>
                    <Text style={styles.exit}>Sair</Text>
                </TouchableOpacity>
            </View>
            <FlatList
            data={shoppings}
            renderItem={({item})=> handlePedidos(item)}
            keyExtractor={(item,index)=> index.toString()}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#D7DBDD'
    },
    historic:{
        marginTop: 8 ,
        marginLeft: 4,
        marginRight: 4,
        flexDirection:'column',
        backgroundColor: '#0FDD7F',
        borderRadius: 4,
        padding: 12
    },
    title:{
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginBottom: 8
    },
    info:{
        color: 'white',
        fontSize: 16
    },
    header:{
        padding: 12,
        flexDirection:'row',
        justifyContent:'flex-end',
        backgroundColor: '#0066ff'
    },
    exit:{
        color :'white',
        fontWeight:'bold',
        textTransform:'uppercase'
    },
    navHeader:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})
export default Home