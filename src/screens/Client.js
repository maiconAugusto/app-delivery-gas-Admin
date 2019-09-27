import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity  } from 'react-native'
import firebase from 'firebase'
import _ from 'lodash'


const Client = ({navigation})=>{
    const [ data, setData ] = useState([])
    useEffect(()=>{
        async function handleClient(){
            const response = await firebase.database().ref(`/Users/${navigation.getParam('id')}`)
                .on('value', snapshot=>{
                    setData(_.values(snapshot.val()))
                })
        }
        handleClient()
    },[])
    function handleClientInfo(item){
        return(
            <View style={styles.infoUser}>
                <Text style={styles.info}>Nome: {item.name}</Text>
                <Text style={styles.info}>Telefone: {item.phone}</Text>
                <Text style={styles.info}>Quantidade: {navigation.getParam('quantity')}</Text>
                <Text style={styles.info}>Data: {navigation.getParam('date')}</Text>
            </View>
        )
    }
    async function handleConfirm(){
        const response = await firebase.database().ref(`/Pedidos/${navigation.getParam('id')}`).update({
            delivered: true
        })
        .then(()=>{
            firebase.database().ref(`/Pedido/Users/${navigation.getParam('id')}`).update({
                delivered: true
            })
        })
    }
    async function handleCancelad(){
        const response = await firebase.database().ref(`/Pedidos/${navigation.getParam('id')}`).set(null)
            .then(()=>{
                firebase.database().ref(`/Pedido/Users/${navigation.getParam('id')}`).set(null)
            })
    }
    return(
        <View style={styles.container}>
            <FlatList
            data={data}
            renderItem={({item})=> handleClientInfo(item)}
            keyExtractor={(item,index)=> index.toString()}
            />
            <View style={styles.btn}>
                <TouchableOpacity 
                onPress={()=> handleConfirm()}
                style={styles.button}>
                    <Text style={styles.txtBtn}>confirmar entrega</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=> handleCancelad()}
                style={[styles.button,styles.buttonCancel]}>
                    <Text style={styles.txtBtn}>cancelar pedido</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#0FDD7F',
    },
    infoUser:{
        flex: 1,
        marginTop: 40
    },
    info:{
        fontSize: 16,
        color: 'white',
        textTransform :'uppercase',
        textAlign: 'center'
    },
    btn:{
        flex: 2,
        justifyContent:'flex-end',
        marginBottom: 8
    },
    button:{
        alignSelf: 'stretch',
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: '#0066ff',
        marginTop: 8,
        height: 50,
        justifyContent: 'center',
        borderRadius: 4
    },
    buttonCancel:{
        backgroundColor:'#EA4C4C',
    },
    txtBtn:{
        color: 'white',
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
        textTransform:'uppercase'
    }
})
export default Client